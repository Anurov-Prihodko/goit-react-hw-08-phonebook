const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getFetching = state => state.auth.isFetching;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getFetching,
};
export default authSelectors;
