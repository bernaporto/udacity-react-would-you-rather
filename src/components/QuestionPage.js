import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import QuestionResult from "./QuestionResult";
import { connect } from "react-redux";
import { keysToArray } from "../utils/helpers";

class QuestionPage extends Component {
  render() {
    const { id, answered } = this.props.match.params;

    return (
      <div>
        { !answered 
          ? <QuestionCard id={id} /> 
          : <QuestionResult id={id} />}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  
  const answers = keysToArray(users[authedUser].answers);
  const answered = (
    answers.includes(question.optionOne.text) ||
    answers.includes(question.optionTwo.text)
  );

  return {
    id,
    answered,
  }
}

export default connect(mapStateToProps)(QuestionPage);
