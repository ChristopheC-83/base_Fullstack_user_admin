import { createContext, useState } from "react";
import axios from "axios";

export const userContext = createContext();

const UserContextProvider = (props) => {
  const URLBack = "http://localhost:8090/kiki/back-react-admin-user/";

  const [connected, setConnected] = useState(false);

  return (
    <userContext.Provider value={{ URLBack , connected, setConnected}}>
      {props.children}
    </userContext.Provider>
  );
};



export default UserContextProvider;