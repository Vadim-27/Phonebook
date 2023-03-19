import css from "./button.module.css"

const Button = ({ children, type = "submit" }) => {
    return (
      <button className={css.btn} type={type}>
        {children}
      </button>
    );
}

export default Button;
