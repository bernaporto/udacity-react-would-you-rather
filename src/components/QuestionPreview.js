import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { colors, defaultStyles } from "../utils/constants";

const styles = {
  avatar: {
    ...defaultStyles.avatar,

    marginLeft: 20,
    marginRight: 30,
    height: 80,
  },
  button: {
    ...defaultStyles.button,
    
    color: colors.PRIMARY,
    backgroundColor: "transparent",
    border: `1px solid ${colors.PRIMARY}`,
  }
};

function QuestionPreview(props) {
  const { author, preview, id } = props;

  return (
    <Card
      title={`${author.name} asks:`}
    >
      <div className="flex-row align-center">
        <img style={styles.avatar} src={author.avatarURL} alt={`${author.name}'s avatar`} />
        <div className="flex-column">
          <h4>Would you rather</h4>
          <p>... { preview } ...</p>
          <Link to={`/question/${id}`} style={styles.button}>View Poll</Link>
        </div>
      </div>
    </Card>
  );
}

function mapStateToProp({ questions, users }, { id }) {
  const question = questions[id];
  const author = users[question.author];
  
  const preview = question.optionOne.text.substring(0, 15).trim();

  return {
    preview,
    author,
  }
}

export default connect(mapStateToProp)(QuestionPreview);
