import React, { useState } from 'react';
import { connect } from 'react-redux';
import { valuesToArray, keysToArray } from '../utils/helpers';
import QuestionPreview from './QuestionPreview';
import TabGroup from './TabGroup';

const tabs = [{
  id: 'unanswered',
  name: 'Unanswered Questions',
}, {
  id: 'answered',
  name: 'Answered Questions',
}];

function Home(props) {
  const { answered, unanswered } = props;
  const [selectedTab, onSelectTab] = useState(tabs[0].id);

  const questions = (
    selectedTab === tabs[0].id
      ? unanswered
      : answered
  );

  return (
    <div className="page-content">
      <div className="card">
        <TabGroup
          tabs={tabs}
          selected={selectedTab}
          onSelect={onSelectTab}
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

function mapStateToProps({ authedUser, questions, users }) {
  const user = users[authedUser];
  const answered = [];
  const unanswered = [];

  const answers = keysToArray(user.answers);
  valuesToArray(questions)
    .sort((a, b) => b.timestamp - a.timestamp)
    .forEach(question => {
      if (answers.includes(question.id)) answered.push(question.id);
      else unanswered.push(question.id);
    });

  return {
    unanswered,
    answered,
  };
}

export default connect(mapStateToProps)(Home);
