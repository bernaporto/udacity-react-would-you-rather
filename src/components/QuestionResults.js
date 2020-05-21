import React from 'react';
import { connect } from 'react-redux';
import { colors, OptionID } from '../utils/constants';

const styles = {
  container: {
    width: 200,
  },
  resultGroup: {
    border: `1px solid ${colors.MID_GRAY}`,
    padding: '10px 20px',
    marginBottom: 5,
  },
  progressGroup: {
    backgroundColor: colors.MID_GRAY,
    margin: '10px 0',
  },
  progressBar: {
    backgroundColor: colors.PRIMARY,
    color: colors.WHITE,
    fontSize: '0.8em',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 5px',
  },
  text: {
    fontSize: '0.8em',
    fontWeight: 'bold',
  }
};

function QuestionResults(props) {
  const { question, answer } = props;

  const optionOne = question.optionOne;
  const optionTwo = question.optionTwo;
  const votesOptOne = optionOne.votes.length;
  const votesOptTwo = optionTwo.votes.length;

  return (
    <div style={styles.container} className="flex-column">
      <h3>Results:</h3>
      <AnswerResult data={{
        text: optionOne.text,
        votes: votesOptOne,
        total: votesOptOne + votesOptTwo,
        selected: answer === OptionID.one,
      }}/>
      <AnswerResult data={{
        text: optionTwo.text,
        votes: votesOptTwo,
        total: votesOptOne + votesOptTwo,
        selected: answer === OptionID.two,
      }}/>
    </div>
  );
}

function AnswerResult(props) {
  const { text, votes, total, selected } = props.data;

  const percentage = `${(votes/total)*100}%`;
  const selectedStyles = {
    resultGroup: {
      ...styles.resultGroup,
      borderWidth: 2,
      borderColor: colors.PRIMARY,
      backgroundColor: colors.SECONDARY,
    },
    text: {
      ...styles.text,
      color: colors.PRIMARY,
    },
  };

  return (
    <div style={selected ? selectedStyles.resultGroup : styles.resultGroup}>
      <p style={selected ? selectedStyles.text: styles.text}>{`Would you rather ${text}?`}</p>

      <div style={styles.progressGroup}>
        <div style={{ ...styles.progressBar, width: percentage }}>
          <p>{percentage}</p>
        </div>
      </div>

      <p style={{ ...styles.text, textAlign: 'center' }}>{`${votes} out of ${total} votes`}</p>
    </div>
  );
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  const question = questions[id];
  const user = users[authedUser];

  return {
    question,
    answer: user.answers[question.id],
  };
}

export default connect(mapStateToProps)(QuestionResults);
