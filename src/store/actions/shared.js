import { showLoading, hideLoading } from 'react-redux-loading';
import { getInitialData, saveQuestionAnswer } from '../../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

export const SAVE_ANSWER = 'SAVE_ANSWER';

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
      });
  };
}

function saveAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_ANSWER,
    answer,
    authedUser,
    qid,
  };
}

export function handleSaveAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    saveQuestionAnswer(authedUser, qid, answer)
      .then(() => dispatch(saveAnswer(authedUser, qid, answer)));
  };
}
