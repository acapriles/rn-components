import { createContext, useEffect, useReducer, useState } from "react";
import { AppState, Appearance, useColorScheme } from "react-native";

import { ThemeState, darkTheme, lightTheme, themeReducer } from "./themeReducer";

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}


export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any ) => {
    
    //? SOLUTION 1. Change theme depending on OS settings
    const colorScheme = useColorScheme(); //? This hook returns 'light' | 'dark' | null | undefined;
  
    const [ theme, dispatch ] = useReducer(themeReducer, ( colorScheme === 'dark' ) ? darkTheme : lightTheme )

    useEffect(() => {
        ( colorScheme === 'light' ) 
            ? setLightTheme() 
            : setDarkTheme();
      
    }, [colorScheme]);
   

    // SOLUTION 2. Change theme depending on OS settings
    /* 
    const [ theme, dispatch ] = useReducer(themeReducer, ( Appearance.getColorScheme() === 'dark' ) ? darkTheme : lightTheme )

    useEffect(() => {
        AppState.addEventListener('change', ( status ) => {
            if ( status === 'active') {
                ( Appearance.getColorScheme() === 'light' ) 
                    ? setLightTheme() 
                    : setDarkTheme();
            }
        });
    }, []);
     */
    

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' });
        console.log('setDarkTheme');
    }

    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' });
        console.log('setLightTheme');
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setLightTheme,
            setDarkTheme
        }}>
            { children }
        </ThemeContext.Provider>
    )
}