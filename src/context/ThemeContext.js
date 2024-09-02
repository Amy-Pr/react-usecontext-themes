import {createContext, useState, useEffect} from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [accentColor, setAccentColor] = useState('#63537d');
  const [fontPercentage, setFontPercentage] = useState(100);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    document.body.style.fontSize = `${fontPercentage}%`;
  }, [isDarkMode, fontPercentage]);

  

  const toggleDarkMode = () => {
    setIsDarkMode(currentMode => !currentMode);
  }

    
    
    return(
        //Take a look at the name of the props passed to the different components in App to figure out the values
        <ThemeContext.Provider value={{
            isDarkMode,
            accentColor,
            fontPercentage,
            actions: {
                toggleDarkMode,
                updateAccentColor: setAccentColor,
                updateFontPercentage: setFontPercentage
            }

        }}>
            {props.children}
        </ThemeContext.Provider>


    )
}

export default ThemeContext;