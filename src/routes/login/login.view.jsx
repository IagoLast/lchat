import React from "react";
import useAuth from '../../services/auth.service';

export default function LoginView() {
  const [username, isSignedIn, signIn, signOut] = useAuth();


  return (
    <main>
      <button onClick={signIn}> signIn </button>
      <button onClick={signOut}> signOut </button>
      <p> {username} </p>
    </main>
  );
}
