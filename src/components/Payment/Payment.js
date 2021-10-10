import React from "react";
import useAuth from "./../../Hooks/useAuth";

const Payment = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>I am payment.js</h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default Payment;
