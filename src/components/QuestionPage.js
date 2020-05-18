import React, { Component } from "react";
import Question from "./Question";
import QuestionResult from "./QuestionResult";

class QuestionPage extends Component {
  render() {
    const answered = true;
    return (
      <div>
        { !answered 
          ? <Question/> 
          : <QuestionResult/> }
      </div>
    );
  }
}

export default QuestionPage;
