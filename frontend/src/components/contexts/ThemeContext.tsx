import { ReactNode, createContext, useState } from "react";

interface ITheme {
    theme: {
        dark: boolean,
        palette: {
            primary: {
                main: string,
                isDarkMode: string
            },
            secondary: {
                main: string,
                isDarkMode: string
            },
            background: {
                full: string,
                primary: string,
                secondary: string,
                tertiary: string
            },
            shadow: {
                primary: string,
                secondary: string,
                tertiary: string
            },
            text: {
                primary: string,
                secondary: string,
                tertiary: string,
                disabled: string
            },
            divider: {
                primary: string,
                secondary: string,
                tertiary: string
            }
        }
    },
    toggleIsDarkMode: () => void;
};

export const ThemeContext = createContext<ITheme | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }): JSX.Element => {

    // Grabs user's current theme mode stored in local storage
    function getThemeMode() {
        const themeMode = localStorage.getItem('novabrato-theme')

        if (!themeMode) {
            localStorage.setItem('novabrato-theme', 'light')
            return false
        } else {
            return themeMode === 'dark'
        }
    }

    const [isDarkMode, setIsDarkMode] = useState<boolean>(getThemeMode);

    const theme = {
        dark: isDarkMode,
        palette: {
            primary: {
                main: '#3EC199',
                isDarkMode: isDarkMode ?
                    '' // dark
                    :
                    '' // light
            },
            secondary: {
                main: '#3EA7C1',
                isDarkMode: isDarkMode ?
                    '' // dark
                    :
                    '' // light
            },
            background: isDarkMode ?
                // dark
                {
                    full: '#000',
                    primary: '#0e0e0e',
                    secondary: '#1a1a1a',
                    tertiary: '#2e2e2e'
                }
                :
                // light
                {
                    full: '#fff',
                    primary: '#f4f4f4',
                    secondary: '#ededed',
                    tertiary: '#dedede'
                },
            shadow: isDarkMode ?
                // dark
                {
                    primary: '#ffffff25',
                    secondary: '#ffffff15',
                    tertiary: '#ffffff05'
                }
                :
                // light
                {
                    primary: '#00000050',
                    secondary: '#00000025',
                    tertiary: '#00000015'
                },
            text: isDarkMode ?
                // dark
                {
                    primary: '#bfbfbf',
                    secondary: '#777777',
                    tertiary: '#444444',
                    disabled: '#bfbfbf50'
                }
                :
                // light
                {
                    primary: '#3d3d3d',
                    secondary: '#6f6f6f',
                    tertiary: '#b7b7b7',
                    disabled: '#3d3d3d50'
                },
            divider: isDarkMode ?
                // dark
                {
                    primary: '#ffffff75',
                    secondary: '#ffffff50',
                    tertiary: '#ffffff25'
                }
                :
                // light
                {
                    primary: '#00000075',
                    secondary: '#00000050',
                    tertiary: '#00000025'
                },
        }
    };

    // Overwrites user's current theme mode and stores it in local storage 
    function toggleIsDarkMode(): void {
        localStorage.setItem('novabrato-theme', isDarkMode ? 'light' : 'dark')
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;