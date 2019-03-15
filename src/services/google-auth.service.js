let authChangedCallback = () => {};

const AUTH_PARAMS = {
  client_id: "667723889099-6aj5akji4qpf4lvltoq4r2sp31vkmqid.apps.googleusercontent.com"
};

function init() {
  const googleAuth = window.gapi.auth2.init(AUTH_PARAMS);
  googleAuth.isSignedIn.listen(_onAuthChanged);
}

function isSignedIn() {
  if (window.gapi.auth2.getAuthInstance() == null) {
    return false;
  }
  return window.gapi.auth2.getAuthInstance().isSignedIn.get();
}

function signIn() {
  const auth2 = window.gapi.auth2.getAuthInstance();
  return auth2.signIn();
}

function signOut() {
  const auth2 = window.gapi.auth2.getAuthInstance();
  return auth2.signOut();
}

function onUsernameChanged(callback) {
  authChangedCallback = callback;
}

function _onAuthChanged(isSignedIn) {
  if (isSignedIn) {
    authChangedCallback(
      window.gapi.auth2.getAuthInstance().currentUser
      .get()
      .getBasicProfile()
      .getEmail()
    );
  } else {
    authChangedCallback("");
  }
}


export default {
  init, 
  isSignedIn,
  signIn,
  signOut,
  onUsernameChanged
};
