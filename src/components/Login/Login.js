import React, { useState } from "react";
import useFirebase from "../../Hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { googleLogin, user, error } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1 className="mt-5">Welcome to our home page</h1>

      <button className="mt-5" onClick={googleLogin}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
