import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colors, defaultStyles, OptionID } from '../utils/constants';
import { handleSaveQuestion } from '../store/actions/questions';
import { Redirect } from 'react-router-dom';

const styles = {
  title: {
    textAlign: 'center',
    margin: 0,
    padding: 10,
    borderBottom: `1px solid ${colors.MID_GRAY}`
  },
  line: {
    flexGrow: 1,
    borderBottom: `1px solid ${colors.MID_GRAY}`
  },
  input: {
    hight: 26,
    border: `1px solid ${colors.MID_GRAY}`,
    margin: '3px 0',
    padding: '5px 10px',
  },
  disabled: {
    ...defaultStyles.button,

    opacity: 0.5,
  }
};

class NewQuestion extends Component {
  state = {
    [OptionID.one]: '',
    [OptionID.two]: '',
    submited: false,
  };

  setOptionText(optionID, text) {
    const state = this.state;
    state[optionID] = text;

    this.setState(state);
  }

  submitQuestion = (e) => {
    e.preventDefault();

    this.props.dispatch(handleSaveQuestion(
      this.state[OptionID.one],
      this.state[OptionID.two],
    ));

    this.setState({
      [OptionID.one]: '',
      [OptionID.two]: '',
      submited: true,
    });
  };

  render() {
    if (this.state.submited) return (
      <Redirect to="/" />
    );

    const disabled = !(this.state.optionOne && this.state.optionTwo);

    return (
      <div className="page-content">
        <div className="card">
          <h3 style={styles.title}>Create New Question</h3>
          <div className="card-content">
            <p>Complete the question:</p>

            <br />

            <h4>Would you rather...</h4>

            <form className="flex-column" onSubmit={this.submitQuestion}>
              <input
                placeholder="Enter Option One Text Here"
                style={styles.input}
                onChange={e => this.setOptionText(OptionID.one, e.target.value)}
              />

              <div className="flex-row align-center">
                <div style={styles.line}></div>
                <h5 style={{ margin: 10 }}>OR</h5>
                <div style={styles.line}></div>
              </div>

              <input
                placeholder="Enter Option Two Text Here"
                style={styles.input}
                onChange={e => this.setOptionText(OptionID.two, e.target.value)}
              />

              <button type="submit" style={disabled ? styles.disabled : defaultStyles.button}>
                Submit
            </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(NewQuestion);
