import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

const styles = {
  avatar: {
    borderRadius: "50%",
    height: 80,
    margin: "5px 30px",
  }
};

function QuestionPreview(props) {
  const { author, questionPreview } = props;

  return (
    <Card
      title={`${author.name} asks:`}
    >
      <div className="flex-row align-center">
        <img style={styles.avatar} src={author.avatarURL} alt={`${author.name}'s avatar`} />
        <div className="flex-column">
          <h4>Would you rather</h4>
          <p>... { questionPreview } ...</p>
          <button className="btn-show">View Poll</button>
        </div>
      </div>
    </Card>
  );
}

function mapStateToProp({ questions, users }, { id }) {
  const question = questions[id];
  const author = users[question.author];
  
  const questionPreview = question.optionOne.text.substring(0, 15).trim();

  return {
    questionPreview,
    author,
  }
}

export default connect(mapStateToProp)(QuestionPreview);
