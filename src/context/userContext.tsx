import React, { createContext, useState } from "react";

type USER = string | null;
export const userContext = createContext<USER>(null);

export const UserContextProvider = (props) => {
  const [user, setUser] = useState("");

  return (
    <userContext.Provider value={{ user, setUser }}>
      {props.children}
    </userContext.Provider>
  );
};
