import UserContext from "../context/UserContext";
import {useContext} from 'react';

const Home = () => {
  const context = useContext(UserContext);
  return (
    <div className="bounds">
      <div className="grid-100">
        {
          context.user ?
            <>
              <h1>Welcome back {context.user.username}!</h1>
              <p>Head over to Settings to change up your preferences</p>
            </>
            :
            <>
              <h1>Welcome to the Main Page</h1>
              <p>Please Login to Continue</p>
            </>
        }
      </div>
    </div>
  );
};

export default Home;