import { useSelector, useDispatch } from "react-redux";

import { logout } from "redux/auth/auth-operations";
import { getUser } from "redux/auth/auth-selectors";

import css from "./navbarUser.module.css"


const NavbarUser = () => {
    const dispatch = useDispatch();
    const { name } = useSelector(getUser);
    const onLogout = () => {
        dispatch(logout());
    }
    return (
      <div className={css.wrapper}>
        {name},
        <button className={css.btnUserLog} onClick={onLogout}>
          Logout
        </button>
      </div>
    );
}
export default NavbarUser;