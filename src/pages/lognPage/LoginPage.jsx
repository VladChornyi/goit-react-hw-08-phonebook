import { useState } from 'react';
import { signIn } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import s from './LoginPage.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onHandleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const onHandleSubmit = async e => {
    e.preventDefault();
    try {
      await dispatch(signIn({ email, password }));
    } catch (error) {
      alert(error);
    }
  };
  return (
    <form className={s.form} onSubmit={onHandleSubmit}>
      <label className={s.label}>
        Email
        <input
          className={s.input}
          type="email"
          name="email"
          placeholder="your email"
          required
          value={email}
          onChange={onHandleChange}
        />
      </label>
      <label className={s.label}>
        Password
        <input
          className={s.input}
          type="password"
          name="password"
          placeholder="your password"
          required
          value={password}
          onChange={onHandleChange}
        />
      </label>

      <button className={s.button} type="submit">
        Sign In
      </button>
    </form>
  );
};

export default LoginPage;
