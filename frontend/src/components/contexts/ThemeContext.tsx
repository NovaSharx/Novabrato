import { ReactNode, createContext, useState } from "react";

interface ITheme {
    theme: {
        dark: boolean,
        palette: {
            primary: {
                main: string,
                themeMode: string
            },
            secondary: {
                main: string,
                themeMode: string
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
    toggleThemeMode: () => void;
};

export const ThemeContext = createContext<ITheme | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }): JSX.Element => {

    const [themeMode, setThemeMode] = useState<boolean>(false);

    const theme = {
        dark: themeMode,
        palette: {
            primary: {
                main: '#3EC199',
                themeMode: themeMode ?
                    '' // dark
                    :
                    '' // light
            },
            secondary: {
                main: '#3EA7C1',
                themeMode: themeMode ?
                    '' // dark
                    :
                    '' // light
            },
            background: themeMode ?
                // dark
                {
                    full: '#000',
                    primary: '#1a1a1a',
                    secondary: '#3a3a3a',
                    tertiary: '#595959'
                }
                :
                // light
                {
                    full: '#fff',
                    primary: '#dedede',
                    secondary: '#ededed',
                    tertiary: '#f4f4f4'
                },
            shadow: themeMode ?
                // dark
                {
                    primary: '#ffffff50',
                    secondary: '#ffffff25',
                    tertiary: '#ffffff15'
                }
                :
                // light
                {
                    primary: '#00000050',
                    secondary: '#00000025',
                    tertiary: '#00000015'
                },
            text: themeMode ?
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
            divider: themeMode ?
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

    function toggleThemeMode(): void {
        setThemeMode(!themeMode);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleThemeMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;