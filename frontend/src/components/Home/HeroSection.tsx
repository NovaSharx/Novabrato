import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from '@emotion/styled';

const HeroSection: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const CallToActionButton = styled.a`
        color: ${theme.palette.primary.main};
        background-color: #121212;
        border-color: ${theme.palette.primary.main};
        &:hover {
            color: white;
            background-color: ${theme.palette.secondary.main};
            border-color: white;
        }
    `;

    return (
        <div id='hero-section-container' className='main-section-container'>
            <div id='hero-section' className='main-section'>

                <span id='hero-section-title'>
                    <span id='practice-guitar' style={{
                        color: 'white'
                    }}>
                        Practice Guitar
                    </span>
                    <span id='music-theory' style={{
                        color: theme.palette.primary.main
                    }}>
                        Music Theory
                    </span>
                </span>

                <span id='hero-section-info'>
                    <span style={{
                        color: 'white'
                    }}>
                        Improve your knowledge and skills on the guitar through fun, interactive and engaging exercises
                    </span>
                </span>

                <span id='call-to-action'>
                    <CallToActionButton href='/exercises' id='call-to-action-button'>
                        START PRACTICING
                    </CallToActionButton>
                </span>
            </div>
        </div>
    );
};
export default HeroSection;