import React, { Component } from "react";
import { connect } from "react-redux";
import { valuesToArray, keysToArray } from "../utils/helpers";
import QuestionPreview from "./QuestionPreview";
import TabGroup from "./TabGroup";

const tabs = [{
  id: "unanswered",
  name: "Unanswered Questions",
}, {
  id: "answered",
  name: "Answered Questions",
}];

class Home extends Component {
  state = {
    selectedTab: tabs[0].id,
  };

  onSelectTab = (id) => {
    this.setState({ selectedTab: id });
  };

  render() {
    const { answered, unanswered } = this.props;

    const questions = (
      this.state.selectedTab === tabs[0].id
        ? unanswered
        : answered
    );

    return (
      <div className="page-content">
        <div className="card">
          <TabGroup
            tabs={tabs}
            selected={this.state.selectedTab}
            onSelect={this.onSelectTab}
          />

          <div className="card-content">
            {questions.map(id => (
              <QuestionPreview key={id} id={id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  const user = users[authedUser];
  const answered = [];
  const unanswered = [];

  const answers = keysToArray(user.answers);
  valuesToArray(questions).forEach(question => {
    if (answers.includes(question.id)) answered.push(question.id);
    else unanswered.push(question.id);
  });

  return {
    unanswered,
    answered,
  }
}

export default connect(mapStateToProps)(Home);
