import { useState, useEffect } from "react";
import { Feedback } from "../Feedback/Feedback";
import { Options } from "../Options/Options";
import { Notification } from "../Notification/Notification";
import { Description } from "../Description/Description";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const storedFeedback = JSON.parse(localStorage.getItem("feedback"));
    return storedFeedback || { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div>
      {/* Description component */}
      <Description />

      {/* Options component */}
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {/* Display either Feedback component or Notification component based on whether feedback is given */}
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback given yet." />
      )}
    </div>
  );
};

export default App;

