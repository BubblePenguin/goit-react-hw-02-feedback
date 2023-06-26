import React, { Component } from 'react';
import { Buttons } from './FeedButtons';
import { Statistics } from './Statistics';
class Feedback extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = { good: 0, mid: 0, bad: 0 };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(ps => ({
      [name]: ps[name] + 1,
    }));

    console.log(this.state);
    console.log(this.countTotalFeedback());
    console.log(this.countPositiveFeedbackPercentage());
  };

  countTotalFeedback(ps = this.state) {
    return Object.values(ps).reduce((x, c) => x + c, 0);
  }

  countPositiveFeedbackPercentage(ps = this.state) {
    return ((ps.good / this.countTotalFeedback(ps)) * 100 || 0).toFixed(0);
  }
  render() {
    //const buttons = {};
    return (
      <div
        style={{
          margin: 100,
        }}
      >
        <Buttons onLeaveFeedback={this.onLeaveFeedback} />
        <Statistics
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          {...this.state}
        />
      </div>
    );
  }
}

export default Feedback;
