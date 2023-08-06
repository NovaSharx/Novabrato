import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from '@emotion/styled';
import VirtualGuitarString from './VirtualGuitarString';
import SettingsIcon from '@mui/icons-material/Settings';

const VirtualGuitarNeck: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const StyledStringContainer = styled.div`
        &::-webkit-scrollbar-track {
            background-color: ${theme.dark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${theme.palette.primary.main};
        }

        &::-webkit-scrollbar-thumb:hover {
            background: ${theme.palette.secondary.main};
        }
    `;

    const FretMarker = styled.span`
        color: ${theme.palette.text.disabled}
    `

    const GuitarSettingsButton = styled.span`
        color: ${theme.palette.primary.main}
    `

    const renderGuitarAside: JSX.Element[] = Array.from(Array(25).keys()).map((marker: number): JSX.Element => {

        const boldMarker: number[] = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24]

        if (marker === 0) {
            return (
                <GuitarSettingsButton key={marker} id='virtual-guitar-settings-button'>
                    <SettingsIcon id='virtual-guitar-settings-icon' style={{ borderColor: theme.palette.primary.main }} />
                </GuitarSettingsButton>
            )
        } else if (boldMarker.includes(marker)) {
            return (
                <FretMarker key={marker} className='virtual-guitar-fret-marker' style={{ color: theme.palette.text.primary, fontSize: '1.3em' }}>{marker}</FretMarker>
            )
        } else {
            return (
                <FretMarker key={marker} className='virtual-guitar-fret-marker'>{marker}</FretMarker>
            )
        }
    })

    return (
        <StyledStringContainer id='virtual-guitar-neck-container'>
            <div id='virtual-guitar-neck'>
                <VirtualGuitarString stringNote={'E'} stringOctave={4} />
                <VirtualGuitarString stringNote={'B'} stringOctave={3} />
                <VirtualGuitarString stringNote={'G'} stringOctave={3} />
                <VirtualGuitarString stringNote={'D'} stringOctave={3} />
                <VirtualGuitarString stringNote={'A'} stringOctave={2} />
                <VirtualGuitarString stringNote={'E'} stringOctave={2} />
            </div>

            <div id='virtual-guitar-aside'>
                {renderGuitarAside}
            </div>
        </StyledStringContainer>
    )
}

export default VirtualGuitarNeck;