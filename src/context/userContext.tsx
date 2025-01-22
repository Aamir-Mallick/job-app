/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";

export type USER = {
  user: string;
  setUser: (value: any) => any;
};
// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext<USER | null>(null);

export const UserContextProvider = (props: any) => {
  const [user, setUser] = useState("");

  return (
    <userContext.Provider value={{ user, setUser }}>
      {props.children}
    </userContext.Provider>
  );
};
