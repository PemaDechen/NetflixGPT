import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"; // adjust path

function Test() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User:", userCred.user);
    } catch (error) {
      console.error("🔥 Firebase Auth Error:", error.code, error.message);
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Test;