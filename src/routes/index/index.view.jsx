import React from "react";
import useAuth from '../../services/auth.service';

export default function LoginView() {
  const [username, isSignedIn] = useAuth();


  if (!isSignedIn()) {
    console.log('Not logged in, redirecting...', isSignedIn());
    // window.location = 'login';
  }

  return (
    <main>
      <h1> Index </h1>
      <p> {username} </p>
    </main>
  );
}
