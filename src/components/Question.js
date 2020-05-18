import React, { Component } from "react";
import Card from "./Card";

class Question extends Component {
  state = {
    selected: ""
  };

  submitAnswer = () => {

  };

  render() {
    return (
      <Card title="username asks:">
        <div className="flex-row">
          <img alt="user avatar" />
          <form className="flex-column" onSubmit={this.submitAnswer}>
            <h3>Would You Rather...</h3>
            <div>
              <div>
                <input type="radio" id="dewey" name="drone" value="dewey" />
                <label for="dewey">Dewey</label>
              </div>

              <div>
                <input type="radio" id="louie" name="drone" value="louie" />
                <label for="louie">Louie</label>
              </div>
            </div>
            <button className="btn-submit" type="submit">Submit</button>
          </form>
        </div>
      </Card>
    );
  }
}

export default Question;
