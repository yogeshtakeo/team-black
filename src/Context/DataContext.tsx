import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

interface IUser {
    
      userDetail: {
        loggedIn: boolean;
        userName: string;
        email: string;
        password: string;
        id: string;
      };
      // blogDetail: {
      //   author: string;
      //   title: string;
      //   content: string;
      //   postedDate: string;
      // };
}
interface UserContextType {
    user: IUser;
    setUserInput: Dispatch<SetStateAction<IUser>>;
  }

//1. creating userContext
export const UserContext = createContext<UserContextType>({
    user: {
    userDetail: {
      loggedIn: false,
      userName: "",
      email: "",
      password: "",
      id: "",
    },
    // blogDetail: {
    //     author: "",
    //     title: "",
    //     content: "",
    //     postedDate: "",
    //   },
    },
      setUserInput: () => {}
  })

//2. creating context provider
function DataProvider({children}: {children: ReactNode}) {
    const [user, setUser] = useState<IUser>({
        userDetail: {
            loggedIn: false,
            userName: "",
            email: "",
            password: "",
            id: "",
          },
          // blogDetail: {
          //     author: "",
          //     title: "",
          //     content: "",
          //     postedDate: "",
          //   },
       
      }
      )
      const setUserInput: UserContextType['setUserInput'] = (input) => {
        setUser((prevUser) => ({ ...prevUser, ...input }));
      };

  return (<>
    <UserContext.Provider value = {{user, setUserInput}}> {children} </UserContext.Provider>
    </>
  )
}

export default DataProvider