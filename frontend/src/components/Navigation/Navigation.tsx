import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from '@emotion/styled';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Navigation: FC = (): ReactElement => {

    const { theme, toggleThemeMode } = useContext(ThemeContext)!

    const NavButtonOption = styled.a`
        color: white;

        &:hover {
            color: ${theme.palette.primary.main};
        }
    `;

    return (
        <div id='navigation' style={{
            backgroundColor: 'black',
            boxShadow: `0rem 0rem 2rem 0rem ${theme.palette.shadow.primary}`
        }}>
            <div id='navigation-container'>

                <div id='nav-logo'>
                    <a href='/' id='nav-logo-button'>
                        <h1 style={{
                            color: 'white'
                        }}>
                            <span id='nav-logo-nova' style={{
                                color: theme.palette.primary.main,
                            }}>
                                NOVA
                            </span>
                            BRATO
                        </h1>
                    </a>
                </div>

                <div id='nav-options' style={{ color: 'white' }}>

                    <ul>
                        <li>
                            <NavButtonOption className='nav-option-button' href='#virtual-guitar-container'>
                                Fretboard
                            </NavButtonOption>
                        </li>

                        <li>
                            <NavButtonOption className='nav-option-button' href='/exercises'>
                                Exercises
                            </NavButtonOption>
                        </li>

                        <li>
                            <NavButtonOption className='nav-option-button' href='/about'>
                                About
                            </NavButtonOption>

                        </li>

                        <li>
                            <span id='nav-theme-button'
                                style={{
                                    backgroundColor: theme.palette.background.tertiary,
                                    color: theme.palette.text.primary,
                                }}
                                onClick={toggleThemeMode}
                            >
                                {theme.dark ? <LightModeIcon /> : <DarkModeIcon />}
                            </span>
                        </li>
                    </ul>

                </div>

                <div id='mobile-nav-options' style={{ color: 'white' }}>
                    Hamburger
                </div>

            </div>
        </div>
    );
};

export default Navigation;