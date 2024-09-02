import {createContext, useState} from 'react';

const UserContext = createContext(null);

export const UserProvider = (props) => { //Higher Order Component: Accepts an existing component and returns a new component
    const [user, setUser] = useState(null);
    
    const signInUser = (username, password) => {
        const newUser = {
          username,
          password
        };
        setUser(newUser);
      }
    
      const signOutUser = () => {
        setUser(null);
      }

    return (
    // The value basically user: user key/value pair, and represents state. This will be passed down to all Components that are descendants to the "Provider"

        <UserContext.Provider value={{
            user,
            actions: {
              signIn: signInUser, //reference to the function
              signOut: signOutUser
            }
            
            }}> 
            {/* children = a react prop that allows you to pass components as data to other components. In this it is the entire App component in the index.js */}
            {props.children}
        </UserContext.Provider>

    );
}

export default UserContext;
