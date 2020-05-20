import React from "react";
import { connect } from "react-redux";
import { keysToArray, valuesToArray } from "../utils/helpers";
import LeaderboardCard from "./LeaderboardCard";

function Leaderboard(props) {
  const { scoreList } = props;

  return (
    <div className="page-content">
      {scoreList.map(({ user, created, answered }, index) => (
        <LeaderboardCard
          key={index}
          user={user}
          created={created}
          answered={answered}
          index={index}
        />
      ))}
    </div>
  );
}

function mapStateToProps({ users }) {
  const scoreList = valuesToArray(users)
    .map(user => {
      const answered = keysToArray(user.answers).length;
      const created = keysToArray(user.questions).length

      return {
        user: {
          name: user.name,
          avatarURL: user.avatarURL,
        },
        score: answered + created,
        answered,
        created,
      }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return {
    scoreList,
  };
}

export default connect(mapStateToProps)(Leaderboard);
