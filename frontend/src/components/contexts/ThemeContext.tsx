import { ReactNode, createContext } from "react";

interface ITheme {
    dark: boolean,
    palette: {
        primary: {
            main: string,
            dark: string,
            light: string
        },
        secondary: {
            main: string,
            dark: string,
            light: string
        },
        text: {
            dark: {
                primary: string,
                secondary: string
            },
            light: {
                primary: string,
                secondary: string
            }
        }
    }
};

export const ThemeContext = createContext<ITheme | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }): JSX.Element => {

    const theme: ITheme = {
        dark: false,
        palette: {
            primary: {
                main: '',
                dark: '',
                light: ''
            },
            secondary: {
                main: '',
                dark: '',
                light: ''
            },
            text: {
                dark: {
                    primary: '',
                    secondary: ''
                },
                light: {
                    primary: '',
                    secondary: ''
                }
            }
        }
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;