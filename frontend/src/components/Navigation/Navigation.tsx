import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navigation: FC = (): ReactElement => {

    const { theme, toggleThemeMode } = useContext(ThemeContext)!

    return (
        <div id='navigation' style={{
            backgroundColor: 'black'
        }}>
            <div id='navigation-container'>

                <div id='nav-logo'>
                    <h1 id='nav-logo-button' style={{
                        color: 'white'
                    }}>
                        <span id='nav-logo-nova' style={{
                            color: theme.palette.primary.main,
                        }}>
                            NOVA
                        </span>
                        BRATO
                    </h1>
                </div>

                <div id='nav-options' style={{
                    color: 'white'
                }}>
                    <span className='nav-option-button'>Fretboard</span>
                    <span className='nav-option-button'>Exercises</span>
                    <span className='nav-option-button'>About</span>
                    <span className='nav-option-button'
                        style={{
                            backgroundColor: 'grey', color: theme.palette.text.primary
                        }}
                        onClick={toggleThemeMode}
                    >
                        {theme.dark ? 'Light' : 'Dark'}
                    </span>
                </div>

            </div>
        </div>
    );
};

export default Navigation;