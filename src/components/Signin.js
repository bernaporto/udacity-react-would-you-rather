import React from 'react';
import SigninCard from './SigninCard';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Signin(props) {
  const { authedUser, location } = props;

  const toPath = (location.state && location.state.from) || '/';
  if (authedUser) return <Redirect to={toPath} />;

  return <SigninCard />
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Signin);
