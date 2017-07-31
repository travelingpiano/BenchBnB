import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = (user) => dispatch => {
  return (
    SessionUtil.login(user).then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};

export const signup = (user) => (dispatch) => {
  return (
    SessionUtil.signup(user).then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors.responseJSON))
    )
  );
};

export const logout = () => (dispatch) => (
  SessionUtil.logout().then(
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
