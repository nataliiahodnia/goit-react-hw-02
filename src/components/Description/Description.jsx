import css from "./Description.module.css";

export const Description = () => {
  return (
    <header className={css.header}>
      <h1 className={css.title}>
        Sip <span className={css.happens}>Happens</span> Café
      </h1>
      <p className={css.descriptionText}>
        Please leave <span className={css.bold}>your feedback</span> about our
        service by selecting one of the options below.
      </p>
    </header>
  );
};
