import React, { useState } from "react";
import { useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AppContext.Provider
      value={{ register, setRegister, email, setEmail, password, setPassword }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
