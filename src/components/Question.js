import React, { Component } from "react";
import { connect } from "react-redux";
import { defaultStyles } from "../utils/constants";
import { keysToArray } from "../utils/helpers";
import Card from "./Card";
import QuestionOptions from "./QuestionOptions";
import QuestionResults from "./QuestionResults";

const styles = {
  avatar: {
    ...defaultStyles.avatar,

    marginLeft: 10,
    marginRight: 20,
    height: 120,
  },
};

class Question extends Component {
  render() {
    const { id, answered, author } = this.props;
    const title = (
      answered 
      ? `Asked by ${author.name}`
      : `${author.name} asks:`
    );

    return (
      <div className="page-content">
        <Card title={title}>
          <div className="flex-row align-center">
            <img style={styles.avatar} src={author.avatarURL} alt={`${author.name}'s avatar`} />

            {!answered
              ? <QuestionOptions id={id} />
              : <QuestionResults id={id} />}

          </div>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  const author = users[question.author];

  const answers = keysToArray(users[authedUser].answers);
  const answered = answers.includes(question.id);

  return {
    id,
    answered,
    author,
  }
}

export default connect(mapStateToProps)(Question);
