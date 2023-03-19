import { useDispatch } from "react-redux";
import LoginForm from "modules/LoginForm/LoginForm";
import { login } from "redux/auth/auth-operations";

import css from './page.module.css';

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleLogin = (data) => {
        dispatch(login(data))
    }
    
    return (
      <div className={css.wrapper}>
        <h1>Login</h1>
        <LoginForm onSubmit={handleLogin} />
      </div>
    );
}

export default LoginPage;