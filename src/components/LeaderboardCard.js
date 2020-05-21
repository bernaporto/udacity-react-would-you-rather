import React from 'react';
import PropTypes from 'prop-types';
import { defaultStyles, colors } from '../utils/constants';
import Card from './Card';

const styles = {
  avatar: {
    ...defaultStyles.avatar,

    marginLeft: 10,
    marginRight: 25,
    height: 80,
  },
  corner: {
    position: 'absolute',
    top: 2,
    left: 2,
    width: 0,
    height: 0,
    borderTop: `30px solid ${colors.MID_GRAY}`,
    borderRight: '30px solid transparent',
  },
  userName: {
    marginTop: 10,
    marginBottom: 15,
  },
  dataArea: {
    flexGrow: 1,
  },
  dataLine: {
    display: 'flex',
    margin: 0,
    marginRight: 25,
  },
  grow: {
    flexGrow: 1,
  },
  score: {
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 30,
    height: 30,
    borderRadius: '50%',
    color: colors.WHITE,
    backgroundColor: colors.PRIMARY,
  },
};

function LeaderboardCard(props) {
  const { user, answered, created, index } = props;
  const score = answered + created;

  const posColors = [
    '#f5db5c',
    '#a6abb7',
    '#b17755',
  ];
  const posColor = posColors[index] || colors.MID_GRAY;

  return (
    <div className="card">
      <div className="card-content flex-row">
        <img style={styles.avatar} src={user.avatarURL} alt={`${user.name}'s avatar`} />

        <div className="flex-column" style={styles.dataArea}>
          <h3 style={styles.userName}>{user.name}</h3>

          <div style={styles.dataLine}>
            <h5 style={styles.grow}>Answered questions</h5>
            <h5>{answered}</h5>
          </div>

          <div style={styles.dataLine}>
            <h5 style={styles.grow}>Created questions</h5>
            <h5>{created}</h5>
          </div>
        </div>

        <Card title="Score">
          <h5 style={styles.score}>{score}</h5>
        </Card>
      </div>

      <div style={{ ...styles.corner, borderTopColor: posColor }}></div>
    </div>
  );
}

LeaderboardCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatarURL: PropTypes.string,
  }),
  answered: PropTypes.number,
  created: PropTypes.number,
  index: PropTypes.number,
};

export default LeaderboardCard;
