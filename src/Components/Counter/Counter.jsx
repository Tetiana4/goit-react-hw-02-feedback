// import { React, Component } from "react";

// class Counter extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleGood = () => {
//     this.setState((prevState) => ({
//       good: prevState.good + 1,
//     }));
//   };

//   handleNeutral = () => {
//     this.setState((prevState) => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };

//   handleBad = () => {
//     this.setState((prevState) => ({
//       bad: prevState.bad + 1,
//     }));
//   };

//   countTotalFeedback() {
//     const totalFeedback = Object.values(this.state)
//     return totalFeedback.reduce((acc, item) => acc + item)
//   }

//   countPositiveFeedbackPercentage() {
//     return Math.round((this.state.good *100) / this.countTotalFeedback())
//   }

//   render() {
//     return (
//       <>
//         <FeedbackOptions
//           onHandleGood={this.handleGood}
//           onHandleNeutral={this.handleNeutral}
//           onHandleBad={this.handleBad}
//         />

//         <Statistics
//           onGood={this.state.good}
//           onNeutral={this.state.neutral}
//           onBad={this.state.bad}
//           onTotal={this.countTotalFeedback()}
//           onPercentage={this.countPositiveFeedbackPercentage()}
//         />
//      </>
//     );
//   }
// }

// export default Counter;