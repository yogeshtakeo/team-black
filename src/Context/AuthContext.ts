import React, { useState, useContext, createContext } from "react";

const AuthContext = createContext(null);
export function AuthProvider() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
}
