import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { colors } from './utils/constants';
import { handleInitialData } from './store/actions/shared';
import { keysToArray } from './utils/helpers';
import Header from './components/Header';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import LoadingBar from 'react-redux-loading';
import NewQuestion from './components/NewQuestion';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Question from './components/Question';
import Signin from './components/Signin';

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return (
    <Router>
      <Fragment>
        <LoadingBar style={{ backgroundColor: colors.PRIMARY, height: 5 }} />
        {props.loaded
          ? <div className="app-container">
            <div className="app-content">
              <Switch>
                <ProtectedRoute exact path="/" component={Home} />
                <ProtectedRoute path="/question/:id" component={Question} />
                <ProtectedRoute path="/add" component={NewQuestion} />
                <ProtectedRoute path="/leaderboard" component={Leaderboard} />
                <Route path="/signin" component={Signin} />
                <Route component={NotFound} />
              </Switch>
            </div>

            <Header />
          </div>
          : null}
      </Fragment>
    </Router>
  );
}

const mapStateToProps = ({ users }) => ({ loaded: keysToArray(users).length > 0 });

export default connect(mapStateToProps)(App);
