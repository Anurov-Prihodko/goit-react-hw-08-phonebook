import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 7,
  },
  button: {
    fontWeight: 700,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    fontSize: 18,
    color: '#717579',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div style={styles.container}>
      <img src={defaultAvatar} alt="" width="40" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <Button
        style={styles.button}
        type="button"
        variant="secondary"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
      {/* <button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      ></button> */}
    </div>
  );
}
