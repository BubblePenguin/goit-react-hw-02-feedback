import React, { useState } from 'react';
import { Buttons } from './FeedButtons';
import { Statistics } from './Statistics';
// class Feedback extends Component {
//   static defaultProps = {};

//   state = { good: 0, mid: 0, bad: 0 };

//   onLeaveFeedback = e => {
//     const { name } = e.target;
//     this.setState(ps => ({
//       [name]: ps[name] + 1,
//     }));
//   };

//   countTotalFeedback(ps = this.state) {
//     return Object.values(ps).reduce((x, c) => x + c, 0);
//   }

//   countPositiveFeedbackPercentage(ps = this.state) {
//     return ((ps.good / this.countTotalFeedback(ps)) * 100 || 0).toFixed(0);
//   }
//   render() {
//     return (
//       <div
//         style={{
//           margin: 100,
//         }}
//       >
//         <Buttons onLeaveFeedback={this.onLeaveFeedback} />
//         <Statistics
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//           {...this.state}
//         />
//       </div>
//     );
//   }
// }

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [mid, setMid] = useState(0);
  const [bad, setBad] = useState(0);
  const onLeaveFeedback = e => {
    const { name } = e.target;

    switch (name) {
      case 'mid':
        setMid(mid + 1);
        break;
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const vars = { good, mid, bad };

  const countTotalFeedback = (ps = vars) => {
    return Object.values(ps).reduce((x, c) => x + c, 0);
  };

  const countPositiveFeedbackPercentage = (ps = vars) => {
    return ((ps.good / countTotalFeedback(ps)) * 100 || 0).toFixed(0);
  };

  return (
    <div
      style={{
        margin: 100,
      }}
    >
      <Buttons onLeaveFeedback={onLeaveFeedback} />
      <Statistics
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
        {...vars}
      />
    </div>
  );
}
