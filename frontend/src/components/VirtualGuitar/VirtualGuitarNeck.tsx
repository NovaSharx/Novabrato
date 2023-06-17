import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from '@emotion/styled';
import VirtualGuitarString from './VirtualGuitarString';

const VirtualGuitarNeck: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const StyledStringContainer = styled.div`
        &::-webkit-scrollbar {
            height: 15px;
        }

        &::-webkit-scrollbar-button {
            width: 1rem;
        }

        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.1);
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${theme.palette.primary.main};
            border: 3px solid #1F2928;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: ${theme.palette.secondary.main};
            border: 3px solid #1f2928c0;
        }
    `

    return (
        <StyledStringContainer className='virtual-guitar-neck-container'>
            <div className='virtual-guitar-neck'>
                <VirtualGuitarString stringNote={'E'} stringOctave={4} />
                <VirtualGuitarString stringNote={'B'} stringOctave={3} />
                <VirtualGuitarString stringNote={'G'} stringOctave={3} />
                <VirtualGuitarString stringNote={'D'} stringOctave={3} />
                <VirtualGuitarString stringNote={'A'} stringOctave={2} />
                <VirtualGuitarString stringNote={'E'} stringOctave={2} />
            </div>

            <div className='virtual-guitar-fret-labels'>
                Virtual Guitar Fret Labels
            </div>
        </StyledStringContainer>
    )
}

export default VirtualGuitarNeck;