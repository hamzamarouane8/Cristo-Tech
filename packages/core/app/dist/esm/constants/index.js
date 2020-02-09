export var LOGOUT_URI = '/logout';
export var LOGIN_URI = '/login';
export var HOME_URI = '/';
export var LOGIN = 'LOGIN';
export var LOGOUT = 'LOGOUT';
export var loginAction = function loginAction(payload) {
  return {
    type: LOGIN,
    payload: payload
  };
};
export var logoutAction = function logoutAction(payload) {
  return {
    type: LOGOUT,
    payload: payload
  };
};