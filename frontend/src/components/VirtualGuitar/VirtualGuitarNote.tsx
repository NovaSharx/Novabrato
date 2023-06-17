import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from '@emotion/styled';

const VirtualGuitarNote: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const StyledNote = styled.div`
        color: ${theme.palette.primary.main};
        border: 2px solid ${theme.palette.primary.main};
        &:hover {
            color: white;
            border: 5px solid ${theme.palette.secondary.main};
        }
    `;

    return (
        <div className='virtual-guitar-fret'>
            <StyledNote className='virtual-guitar-note'>
                A#
            </StyledNote>
        </div>
    )
}

export default VirtualGuitarNote;