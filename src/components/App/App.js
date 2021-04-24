import React, { useState } from "react";
import SectionTittle from "../SectionTittle/SectionTittle";
import FeedBackOptions from "../FeedBackOptions/FeedBackOptions";
import Statistics from "../Statistics/Statistics";
import "./App.css";

const feedBackOptions = ["good", "neutral", "bad"];

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const onLeaveFeedback = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };
  return (
    <>
      <SectionTittle title={"Please leave feedback"}>
        <FeedBackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={feedBackOptions}
        />
      </SectionTittle>
      <SectionTittle title={"Statistics"}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </SectionTittle>
    </>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onLeaveFeedback = (e) => {
//     this.setState((prevState) => {
//       return { [e.target.name]: prevState[e.target.name] + 1 };
//     });
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return Math.round((good / total) * 100);
//   };
//   countTotalFeedback = () => {
//     let { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };
//   render() {
//     let { good, neutral, bad } = this.state;
//     return (
//       <>
//         <SectionTittle title={"Please leave feedback"}>
//           <FeedBackOptions
//             onLeaveFeedback={this.onLeaveFeedback}
//             options={feedBackOptions}
//           />
//         </SectionTittle>
//         <SectionTittle title={"Statistics"}>
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         </SectionTittle>
//       </>
//     );
//   }
// }

// export default App;
