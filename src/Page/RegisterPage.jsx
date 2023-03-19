import RegisterForm from "modules/RegisterForm/RegisterForm";
import { useDispatch } from "react-redux";
import { signup } from "redux/auth/auth-operations";

import css from './page.module.css';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const handleSignup = (data) => {
        dispatch(signup(data))
    }
    return (
      <div className={css.wrapper}>
        <h1 className="page-title">Register page</h1>
        <RegisterForm onSubmit={handleSignup} />
      </div>
    );
}
export default RegisterPage;