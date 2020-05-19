import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from "./store/actions/shared";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoadingBar } from 'react-redux-loading';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import QuestionPage from './components/QuestionPage';
 
class App extends Component {
  componentDidMount() {
		this.props.dispatch(handleInitialData());
  }
  
  render() {
    return (
      <Router>
        <div className="app-container">
          <div className="app-header">
            <Navigation />
            <div>Login data</div>
          </div>
          <Fragment>
            <LoadingBar />
          </Fragment>
          { this.props.loading === true ? null :
            <div className="app-content">
              <Route exact path="/" component={HomePage} />
              <Route exact path="/question/:id" component={QuestionPage} />
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
