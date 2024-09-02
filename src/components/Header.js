import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

import Nav from './Nav';

const Header = () => {
  const {accentColor} = useContext(ThemeContext) //The useContext hook returns the value prop provided to the Provider tag in ThemeContext; Since we only need accentColor value, we can destructure the object
  return (
    <div className="header" style={{ background: accentColor }}>
      <div className="bounds">
        <Link to="/">
          <h1 className="header--logo">MyApp</h1>
        </Link>
        <Nav />
      </div>
    </div>
  );
};

export default Header;