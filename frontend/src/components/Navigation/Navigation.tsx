import { FC, ReactElement, useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { HashLink } from 'react-router-hash-link';
import styled from '@emotion/styled';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Navigation: FC = (): ReactElement => {

    const { theme, toggleIsDarkMode } = useContext(ThemeContext)!

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navThemeButton = (
        <span className='nav-theme-button'
            style={{
                backgroundColor: theme.palette.background.tertiary,
                color: theme.palette.text.primary,
            }}
            onClick={toggleIsDarkMode}
        >
            {theme.dark ? <LightModeIcon className='theme-icon' /> : <DarkModeIcon className='theme-icon' />}
        </span>
    )

    const NavButtonOption = styled.span`
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
                            <HashLink to='/#virtual-guitar-container' className='nav-option-button'>
                                <NavButtonOption>
                                    Fretboard
                                </NavButtonOption>
                            </HashLink>
                        </li>

                        <li>
                            <a href='/exercises' className='nav-option-button'>
                                <NavButtonOption>
                                    Exercises
                                </NavButtonOption>
                            </a>
                        </li>

                        <li>
                            <a href='/about' className='nav-option-button' >
                                <NavButtonOption>
                                    About
                                </NavButtonOption>
                            </a>
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
                        <MobileNavMenu id='mobile-menu' >
                            <ul onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

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