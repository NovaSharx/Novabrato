import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from '@emotion/styled';

const HeroSection: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const CallToActionButton = styled.span`
        color: ${theme.palette.primary.main};
        border: 2px solid ${theme.palette.primary.main};
        &:hover {
            color: white;
            border: 2px solid ${theme.palette.secondary.main};
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
                        Improve your improvisational skills on the guitar through fun, interactive and engaging exercises
                    </span>
                </span>

                <span id='call-to-action'>
                    <CallToActionButton id='call-to-action-button'>
                        START PRACTICING
                    </CallToActionButton>
                </span>
            </div>
        </div>
    );
};
export default HeroSection;