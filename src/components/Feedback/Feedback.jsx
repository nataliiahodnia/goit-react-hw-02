import css from "./Feedback.module.css";

export const Feedback = ({
  feedback: { good, neutral, bad },
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <div className={css.feedbackContainer}>
      <h2 className={css.feedbackTitle}>Feedback statistics</h2>
      <p className={css.feedbackItem}>Good: {good}</p>
      <p className={css.feedbackItem}>Neutral: {neutral}</p>
      <p className={css.feedbackItem}>Bad: {bad}</p>
      <p className={css.feedbackItem}>Total feedbacks: {totalFeedback}</p>
      <p className={css.feedbackItem}>
        Positive feedback percentage:{" "}
        {isNaN(positivePercentage) ? 0 : `${positivePercentage}%`}
      </p>
    </div>
  );
};
