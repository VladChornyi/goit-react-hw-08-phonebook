import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../redux/auth/auth-operations';
import { useHistory } from 'react-router-dom';
import { authUserNameSelector, authTokenSelector } from '../../redux/auth/auth-selectors';
import s from './Navigation.module.css';

const Navigation = () => {
  const userName = useSelector(authUserNameSelector);
  const userToken = useSelector(authTokenSelector);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    effect;
    return () => {
      cleanup;
    };
  }, [input]);

  const onHandleLogOut = async e => {
    e.preventDefault();
    try {
      await dispatch(logOut(userToken));
      history.push('/');
    } catch (error) {}
  };
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <NavLink exact to="/" className={s.nav_link} activeClassName={s.nav_link__active}>
            Home
          </NavLink>
        </li>
        {userToken && (
          <li>
            <NavLink
              exact
              to="/contacts"
              className={s.nav_link}
              activeClassName={s.nav_link__active}
            >
              Contacts
            </NavLink>
          </li>
        )}
        {!userToken && (
          <>
            <li>
              <NavLink
                exact
                to="/register"
                className={s.nav_link}
                activeClassName={s.nav_link__active}
              >
                SignUp
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/login"
                className={s.nav_link}
                activeClassName={s.nav_link__active}
              >
                SignIn
              </NavLink>
            </li>
          </>
        )}
      </ul>
      {userToken && (
        <div className={s.box}>
          <h3 className={s.title}>Добро пожаловать {userName}</h3>
          <button type="button" className={s.button} onClick={onHandleLogOut}>
            Log OUT
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
