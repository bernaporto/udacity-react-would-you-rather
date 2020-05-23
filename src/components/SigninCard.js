import React, { useState } from "react";
import logo from '../resources/logo.svg';
import Card from './Card';
import { connect } from "react-redux";
import { defaultStyles } from '../utils/constants';
import { keysToArray } from '../utils/helpers';
import { setAuthedUser } from '../store/actions/authedUser';

const styles = {
  logo: {
    margin: 'auto',
    maxWidth: 200,
  },
  disabled: {
    ...defaultStyles.button,

    opacity: 0.5,
  }
};

function SigninCard(props) {
  const NONE = 'none';
  const [selected, setSelected] = useState(NONE);
  
  const { userIDs, dispatch } = props;
  const disabled = !userIDs.includes(selected);

  const signin = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(selected));
  };

  return (
    <Card
      title="Welcome to the Would You Rather App!"
      subtitle="Please sign in to continue"
    >
      <img style={styles.logo} src={logo} alt="React logo" />

      <h3 className="center">Sign in</h3>

      <form className="flex-column" onSubmit={signin}>
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          <option value={NONE} disabled>Select User</option>
          {userIDs.map(id => (
            <option key={id} value={id}>{id}</option>
          ))}
        </select>

        <button type="submit"
          style={disabled ? styles.disabled : defaultStyles.button}
          disabled={disabled}>
          Sign in
          </button>
      </form>
    </Card>
  );
}

function mapStateToProps({ users }) {
  return {
    userIDs: keysToArray(users),
  };
}

export default connect(mapStateToProps)(SigninCard);
