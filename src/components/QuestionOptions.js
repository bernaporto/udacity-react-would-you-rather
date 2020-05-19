import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { defaultStyles } from "../utils/constants";
import { handleSaveAnswer } from "../store/actions/shared";
import { Redirect } from "react-router-dom";

class QuestionOptions extends Component {
  state = {
    selected: "",
    submited: false,
  };

  onSelectOption = (e) => {
    const selected = e.target.value;

    this.setState({ selected });
  };

  submitAnswer = (e) => {
    e.preventDefault();

    const { question, dispatch } = this.props;
    const { selected } = this.state;

    dispatch(handleSaveAnswer(question.id, selected));

    this.setState({ submited: true });
  };

  render() {
    const { selected, submited } = this.state;

    if (submited) return <Redirect to="/" />

    const { question } = this.props;
    const disabled = selected === "";

    const optionOne = question.optionOne.text;
    const optionTwo = question.optionTwo.text;

    const getRadioInput = (text, id) => {
      return (
        <div style={styles.option}>
          <input
            type="radio" id={id}
            value={id}
            checked={selected === id}
            onChange={this.onSelectOption}
          />
          <label style={styles.label} htmlFor={id}>{text}</label>
        </div>
      );
    };

    return (
      <form className="flex-column" onSubmit={this.submitAnswer}>
        <h3>Would You Rather...</h3>

        {getRadioInput(optionOne, "optionOne")}
        {getRadioInput(optionTwo, "optionTwo")}

        <button
          disabled={disabled}
          style={disabled ? styles.disabled : defaultStyles.button}
          type="submit"
        >Submit</button>
      </form>
    );
  }
}

QuestionOptions.propTypes = {
  id: PropTypes.string,
};

function mapStateToProps({ questions }, { id }) {
  return {
    question: questions[id],
  }
}

export default connect(mapStateToProps)(QuestionOptions);


/*  CSS STYLES  */

const styles = {
  option: {
    display: "flex",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  label: {
    marginLeft: 10,
    fontSize: "0.8em"
  },
  disabled: {
    ...defaultStyles.button,

    opacity: 0.5,
  }
};
