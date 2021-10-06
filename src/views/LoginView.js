import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  form: {
    width: 400,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
    fontWeight: 700,
    fontSize: 18,
    color: '#717579',
  },
  title: {
    fontWeight: 700,
    marginBottom: 15,
    marginTop: 15,
    textAlign: 'left',
    color: '#717579',
  },
  text: {
    color: '#000000',
    fontSize: 14,
    padding: 10,
    borderRadius: 5,
    border: '1px solid rgba(33, 33, 33, 0.2)',
    outline: 0,
  },
  button: {
    fontWeight: 700,
  },
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h3 style={styles.title}>Login page</h3>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Email
          <input
            style={styles.text}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            style={styles.text}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <Button type="submit" style={styles.button} variant="secondary">
          Sign up
        </Button>

        {/* <button type="submit">Sign in</button> */}
      </form>
    </div>
  );
}
