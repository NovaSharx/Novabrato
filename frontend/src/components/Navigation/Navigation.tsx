import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { applyStyling } from '../../utility/ApplyStyling';

const Navigation: FC = (): ReactElement => {

    const { theme, toggleThemeMode } = useContext(ThemeContext)!

    const hoverInNavOption = (e: React.MouseEvent) => applyStyling(e, { color: theme.palette.secondary.main })
    const hoverOutNavOption = (e: React.MouseEvent) => applyStyling(e, { color: 'white' })

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

                    <span className='nav-option-button' onMouseEnter={hoverInNavOption} onMouseLeave={hoverOutNavOption}>
                        Fretboard
                    </span>

                    <span className='nav-option-button' onMouseEnter={hoverInNavOption} onMouseLeave={hoverOutNavOption}>
                        Exercises
                    </span>

                    <span className='nav-option-button' onMouseEnter={hoverInNavOption} onMouseLeave={hoverOutNavOption}>
                        About
                    </span>

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