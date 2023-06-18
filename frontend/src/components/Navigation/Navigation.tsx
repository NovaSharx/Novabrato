import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from '@emotion/styled';

const Navigation: FC = (): ReactElement => {

    const { theme, toggleThemeMode } = useContext(ThemeContext)!

    const NavButtonOption = styled.span`
        &:hover {
            color: ${theme.palette.primary.main};
        }
    `;

    return (
        <div id='navigation' style={{
            backgroundColor: 'black'
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

                    <NavButtonOption className='nav-option-button'>
                        Fretboard
                    </NavButtonOption>

                    <NavButtonOption className='nav-option-button'>
                        Exercises
                    </NavButtonOption>

                    <NavButtonOption className='nav-option-button'>
                        About
                    </NavButtonOption>

                    <span className='nav-option-button'
                        style={{
                            backgroundColor: theme.palette.background.tertiary,
                            color: theme.palette.text.primary,
                            borderRadius: '0.2rem'
                        }}
                        onClick={toggleThemeMode}
                    >
                        {theme.dark ? 'Dark' : 'Light'}
                    </span>
                </div>

            </div>
        </div>
    );
};

export default Navigation;