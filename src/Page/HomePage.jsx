import css from "./page.module.css"

const HomePage = () => {
    return (
      <div className={css.wrapper}>
        <h1>Application Phonebook</h1>
        <p>
          Welcome to the application Phonebook. To use the application, you need
          to register or log in.
        </p>
      </div>
    );
}

export default HomePage;