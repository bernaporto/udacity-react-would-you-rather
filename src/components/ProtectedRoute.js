import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ authedUser, location, component: Component, ...rest }) {
  return (
    <Route {...rest}
      render={(props) => (
        authedUser
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/signin',
              state: { from: location.pathname } }} />
      )}
    />
  );
}

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(ProtectedRoute);
