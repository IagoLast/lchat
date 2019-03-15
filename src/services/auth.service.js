import {
  useState,
  useEffect
} from "react";

import googleAuth from './google-auth.service';

export default function useAuth() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    googleAuth.init();
    googleAuth.onUsernameChanged(setUsername);
  }, []);

  function isSignedIn() {
    return googleAuth.isSignedIn();
  }

  function signIn() {
    return googleAuth.signIn();
  }

  function signOut() {
    return googleAuth.signOut();
  }
  
  return [username, isSignedIn, signIn, signOut];
}