import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 18,
    fontWeight: 700,
    fontSize: 24,
    // color: '#2A363B',
    color: '#2b3c8a',
    textShadow:
      '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
  },
  activeLink: {
    color: '#E84A5F',
  },
  // block: {
  //   height: 150,
  // },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav style={styles.block}>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Main
      </NavLink>

      {isLoggedIn ? (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Phonebook
        </NavLink>
      ) : null}
    </nav>
  );
};

export default Navigation;
