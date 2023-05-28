import { createContext, useContext, useEffect, useState } from "react";
import { VotingContext } from "../utils/VotingContext";
const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [currrent, setCurrrent] = useState(null);
  const [role, setRole] = useState(null);
  useEffect(() => {

  }, [role]);

  return (
    <Context.Provider value={{ currrent, setCurrrent, role, setRole }}>
      {children}
    </Context.Provider>
  );
};

export const StateProvider = () => useContext(Context);
