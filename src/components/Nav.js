import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import {useContext} from 'react';

const Nav = () => {
  const context = useContext(UserContext); //passing it the context you want to subscribe to
  return (
    // using a 'render prop' which is a function being passed as props. The function contains part of the UI needed to render.
    // the parameter passed to the function (often named 'context' or 'value' will be equal to the value prop of the Provider)
    //The UserContext.Consumer method is a bit outdated though. Replaced with useContext hook
    // <UserContext.Consumer>
    //   {context => {
    //     return (
          <nav>
            {
             context.user ? (
                <>
                  <Link to="/settings">Settings</Link>
                  <Link to="/signout">Sign Out</Link>
                </>
              ) : (
                <Link className="signin" to="/signin">Sign In</Link>
              )
            }
          </nav>
    //     )

    //   }}
    // </UserContext.Consumer>

  );

}

export default Nav;