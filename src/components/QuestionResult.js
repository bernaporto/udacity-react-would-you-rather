import React from "react";
import Card from "./Card";

function QuestionResult() {
  return (
    <Card title="username asks:">
      <div className="flex-row">
        <img alt="user avatar" />
        <div className="flex-column">
          <h3>Results:</h3>
          <AnswerResult />
          <AnswerResult />
        </div>
      </div>
    </Card>
  );
}

function AnswerResult() {
  return (
    <div>Answer result</div>
  );
}

export default QuestionResult;
