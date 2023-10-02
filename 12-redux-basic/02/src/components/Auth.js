import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

import classes from './Auth.module.css';
import UserProfile from './UserProfile';

const Auth = () => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  const authHandler = (e) => {
    e.preventDefault();

    dispatch(authActions.login());
  };

  if (isLoggedIn) return <UserProfile />;

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={authHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
