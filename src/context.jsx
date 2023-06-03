import React, { useState } from "react";
import { useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [register, setRegister] = useState(false);

  return (
    <AppContext.Provider value={{ register, setRegister }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
