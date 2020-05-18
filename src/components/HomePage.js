import React, { Component } from "react";
import QuestionPreview from "./QuestionPreview";
import Card from "./Card";

const styles = {
  tabGroup: {
    display: "flex",
    borderBottom: "1px solid #cccccc",
    justifyContent: "space-evenly",
  },
  tab: {
    padding: 10,
  },
};

class HomePage extends Component {
  render() {
    return (
      <div className="card">
        <div style={styles.tabGroup}>
          <div style={styles.tab}>Unanswered Questions</div>
          <div style={styles.tab}>Answered Questions</div>
        </div>

        <div className="card-content">
          <QuestionPreview/>
          <QuestionPreview/>
          <QuestionPreview/>
        </div>
      </div>
    );
  }
}

export default HomePage;
