import css from "./Notification.module.css";

export const Notification = ({ message }) => {
  return (
    <div className={css.notificationcontainer}>
      <p className={css.notificationtext}>{message}</p>
    </div>
  );
};
