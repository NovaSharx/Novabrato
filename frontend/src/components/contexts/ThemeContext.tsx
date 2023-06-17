import { ReactNode, createContext, useState } from "react";

interface ITheme {
    theme: {
        dark: boolean,
        palette: {
            primary: {
                main: string,
                themeMode: string,
            },
            secondary: {
                main: string,
                themeMode: string,
            },
            background: {
                primary: string,
                secondary: string,
                tertiary: string,
            },
            text: {
                primary: string;
                secondary: string;
            } | {
                primary: string;
                secondary: string;
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
                    primary: '#1a1a1a',
                    secondary: '#3a3a3a',
                    tertiary: '#595959',
                }
                :
                // light
                {
                    primary: '#dedede',
                    secondary: '#ededed',
                    tertiary: '#f4f4f4',
                },
            text: themeMode ?
                // dark
                {
                    primary: '#bfbfbf',
                    secondary: ''
                }
                :
                // light
                {
                    primary: '#3d3d3d',
                    secondary: ''
                }
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