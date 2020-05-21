import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import Card from './Card';
import { defaultStyles } from '../utils/constants';

const styles = {
  logo: {
    margin: 'auto',
    maxWidth: 200,
  }
};

class Signin extends Component {
  render() {
    return (
      <Card
        title="Welcome to the Would You Rather App!"
        subtitle="Please sign in to continue"
      >
        <img style={styles.logo} src={logo} alt="React logo"/>
        <h3 className="center">Sign in</h3>
        <form className="flex-column">
          <select>
            <option>User name</option>
            <option>User name</option>
            <option>User name</option>
          </select>
          <button style={defaultStyles.button} type="submit">Sign in</button>
        </form>
      </Card>
    );
  }
}

export default Signin;
