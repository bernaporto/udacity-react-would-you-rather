import React from 'react';
import sadFace from '../resources/sad-face.svg';
import { colors } from '../utils/constants';

const styles = {
  sadFace: {
    width: 150,
    marginTop: 30,
  },
  title: {
    marginTop: 10,
    marginBottom: 0,
    fontSize: 86,
    color: colors.PRIMARY,
  },
  text: {
    marginTop: 0,
    marginBottom: 0,
    color: colors.MID_GRAY,
  }
};

function NotFound() {
  return(
    <div className="page-content align-center">
      <img style={styles.sadFace} src={sadFace} alt="Sad face" />
      <h1 style={styles.title}>404</h1>
      <h4 style={styles.text}>PAGE NOT FOUND</h4>
    </div>
  );
}

export default NotFound;
