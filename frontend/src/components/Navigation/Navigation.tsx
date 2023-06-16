import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navigation: FC = (): ReactElement => {

    const theme = useContext(ThemeContext)!

    return (
        <div id='navigation' className='main-section-container' style={{
            backgroundColor: 'black'
        }}>
            <div id='navigation-container' className='main-section'>

                <div id='nav-logo'>
                    <h1 id='nav-logo-button' style={{
                        color: 'white'
                    }}>
                        <span id='nav-logo-nova' style={{
                            color: theme.palette.primary.main
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
                </div>

            </div>
        </div>
    );
};

export default Navigation;