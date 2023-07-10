import { FC, ReactElement, useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from '@emotion/styled';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Navigation: FC = (): ReactElement => {

    const { theme, toggleThemeMode } = useContext(ThemeContext)!

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navThemeButton = (
        <span className='nav-theme-button'
            style={{
                backgroundColor: theme.palette.background.tertiary,
                color: theme.palette.text.primary,
            }}
            onClick={toggleThemeMode}
        >
            {theme.dark ? <LightModeIcon className='theme-icon' /> : <DarkModeIcon className='theme-icon' />}
        </span>
    )

    const NavButtonOption = styled.a`
        color: white;

        &:hover {
            color: ${theme.palette.primary.main};
        }
    `;

    const MobileNavMenu = styled.div`
        background-color: ${theme.palette.background.primary};
    `;

    const MobileMenuItem = styled.a`
        color: ${theme.palette.text.primary};

        &:hover {
            background-color: ${theme.palette.background.secondary};
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
                            {navThemeButton}
                        </li>
                    </ul>

                </div>

                <div id='mobile-nav-options' style={{ color: 'white' }}>

                    <span id='mobile-menu-button' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <span className='mobile-menu-bar' />
                        <span className='mobile-menu-bar' />
                        <span className='mobile-menu-bar' />
                    </span>

                    <div id='mobile-menu-container' className={isMobileMenuOpen ? 'mobile-menu-active' : 'mobile-menu-inactive'}>
                        <MobileNavMenu id='mobile-menu'>
                            <ul>

                                <li>
                                    <MobileMenuItem href='#virtual-guitar-container'>
                                        Fretboard
                                    </MobileMenuItem>
                                </li>

                                <li>
                                    <MobileMenuItem href='/exercises'>
                                        Exercises
                                    </MobileMenuItem>
                                </li>

                                <li>
                                    <MobileMenuItem href='/about'>
                                        About
                                    </MobileMenuItem>
                                </li>

                                <li>
                                    {navThemeButton}
                                </li>

                            </ul>
                        </MobileNavMenu>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Navigation;