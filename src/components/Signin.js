import React, { Component } from "react";
import logo from '../resources/logo.svg';

const styles = {
  header: {
    title: {
      margin: 3,
    },
    subtitle: {
      margin: 0,
    },
  },
  logo: {
    margin: "auto",
    maxWidth: 200,
  }
};

class Signin extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header center">
          <h4 style={styles.header.title}>
            Welcome to the Would You Rather App!
          </h4>
          <p style={styles.header.subtitle}>
            Please sign in to continue
          </p>
        </div>
        <div className="card-content">
          <img style={styles.logo} src={logo} alt="React logo"/>
          <h3 className="center">Sign in</h3>
          <form className="flex-column">
            <select>
              <option>User name</option>
              <option>User name</option>
              <option>User name</option>
            </select>
            <button className="btn-submit" type="submit">Sign in</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Signin;
