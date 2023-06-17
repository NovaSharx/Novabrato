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
            width: 100%;
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
            cursor: pointer;
        }
    `

    return (
        <StyledStringContainer className='virtual-guitar-neck-container'>
            <div className='virtual-guitar-neck'>
                <VirtualGuitarString />
                <VirtualGuitarString />
                <VirtualGuitarString />
                <VirtualGuitarString />
                <VirtualGuitarString />
                <VirtualGuitarString />
            </div>

            <div className='virtual-guitar-fret-labels'>
                Virtual Guitar Fret Labels
            </div>
        </StyledStringContainer>
    )
}

export default VirtualGuitarNeck;