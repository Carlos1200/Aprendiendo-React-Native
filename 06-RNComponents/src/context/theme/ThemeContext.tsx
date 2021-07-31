import React, {createContext, useEffect, useReducer} from 'react';
import {Appearance} from 'react-native';
import {AppState} from 'react-native';
// import {useColorScheme} from 'react-native';
import {ThemeState, themeReducer, lightTheme, darkTheme} from './ThemeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  //Solo en IOS
  // const colorScheme = useColorScheme();

  // useEffect(() => {
  //   if (colorScheme === 'light') {
  //     setLightTheme();
  //   } else {
  //     setDarkTheme();
  //   }
  // }, [colorScheme]);

  const [theme, dispatch] = useReducer(
    themeReducer,
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
  };
  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
  };

  return (
    <ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
