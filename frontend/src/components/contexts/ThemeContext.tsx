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
        background: {
            light: '',
            dark: ''
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
                main: '#3EC199',
                dark: '',
                light: ''
            },
            secondary: {
                main: '#3EA7C1',
                dark: '',
                light: ''
            },
            background: {
                light: '',
                dark: ''
            },
            text: {
                dark: {
                    primary: '#fff',
                    secondary: ''
                },
                light: {
                    primary: '#000',
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