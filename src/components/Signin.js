import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import Card from './Card';
import { defaultStyles } from '../utils/constants';
import { connect } from 'react-redux';
import { keysToArray } from '../utils/helpers';
import { Redirect } from 'react-router-dom';
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

class Signin extends Component {
  state = {
    selected: "none",
  };

  signin = (e) => {
    e.preventDefault();
    
    const { selected } = this.state;
    this.props.dispatch(setAuthedUser(selected));
  }

  onChangeSelected = (e) => {
    const selected = e.target.value;
    this.setState({ selected });
  };

  render() {
    const { authedUser, userIDs, location } = this.props;

    const toPath = (location.state && location.state.from) || "/";
    if (authedUser) return <Redirect to={toPath} />

    const { selected } = this.state;
    const disabled = !userIDs.includes(selected);

    return (
      <Card
        title="Welcome to the Would You Rather App!"
        subtitle="Please sign in to continue"
      >
        <img style={styles.logo} src={logo} alt="React logo" />

        <h3 className="center">Sign in</h3>

        <form className="flex-column" onSubmit={this.signin}>
          <select value={selected} onChange={this.onChangeSelected}>
            <option value="none" disabled>Select User</option>
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
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    userIDs: keysToArray(users),
  };
}

export default connect(mapStateToProps)(Signin);
