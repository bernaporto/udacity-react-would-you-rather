import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './store/actions/shared';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoadingBar } from 'react-redux-loading';
import Header from './components/Header';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import NewQuestion from './components/NewQuestion';
import Question from './components/Question';
import Signin from './components/Signin';

class App extends Component {
  componentDidMount() {
		this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <Header/>

          <Fragment>
            <LoadingBar />
          </Fragment>

          { this.props.loading === true ? null :
            <div className="app-content">
              <Route exact path="/" component={Home} />
              <Route path="/question/:id" component={Question} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/signin" component={Signin} />
            </div> }
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
	return {
		loading: authedUser === null,
	};
}

export default connect(mapStateToProps)(App);
