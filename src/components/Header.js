import React from 'react';
import { connect } from 'react-redux';
import { defaultStyles } from '../utils/constants';
import { setAuthedUser } from '../store/actions/authedUser';
import Navigation from './Navigation';

const styles = {
  avatar: {
    ...defaultStyles.avatar,
    width: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  loginArea: {
    minWidth: 200,
    display: 'flex',
  },
  button: {
    border: 'none',
    backgroundColor: 'transparent',
  }
};

function Header(props) {
  const { user, dispatch } = props;

  const logout = () => {
    dispatch(setAuthedUser(null));
  };

  return (
    <div className="app-header">
      <div className="app-header-content">
        <Navigation />

        <div style={styles.loginArea}>
          {user
            ? (<div className="flex-row align-center">
              <p>{`Hello, ${user.name}`}</p>
              <img style={styles.avatar} src={user.avatarURL} alt={`${user.name}'s avatar`} />
              <button style={styles.button} onClick={logout}>Logout</button>
            </div>)
            : null}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ authedUser, users }) {
  return {
    user: authedUser && users[authedUser],
  };
}

export default connect(mapStateToProps)(Header);
