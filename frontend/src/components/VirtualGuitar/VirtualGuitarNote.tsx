import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from '@emotion/styled';
import { VirtualGuitarContext } from '../contexts/VirtualGuitarContext';

interface VirtualGuitarNoteProps {
    note: string,
    frequency: number
}

const VirtualGuitarNote: FC<VirtualGuitarNoteProps> = ({ note, frequency }): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const { selectedNotes, setSelectedNotes, playNote } = useContext(VirtualGuitarContext)!

    const StyledNote = styled.div`
        color: ${selectedNotes.includes(note) ? 'white' : theme.palette.primary.main};
        border: 2px solid ${selectedNotes.includes(note) ? theme.palette.secondary.main : theme.palette.primary.main};
        &:hover {
            color: white;
            border: 5px solid ${theme.palette.secondary.main};
        }
    `;

    function handleClick(): void {
        playNote(frequency)
    }

    function handleRightClick(event: any): void {
        event.preventDefault();
        const clickedNote: string = event.target.innerHTML

        if (!selectedNotes.includes(clickedNote)) {
            setSelectedNotes([...selectedNotes, clickedNote])
        } else {
            let updatedSelectedNotesArray: string[] = selectedNotes
            const indexToRemove: number = selectedNotes.indexOf(clickedNote)
            updatedSelectedNotesArray.splice(indexToRemove, 1)
            setSelectedNotes([...updatedSelectedNotesArray])
        }
    }

    return (
        <div className='virtual-guitar-fret'>
            <StyledNote className='virtual-guitar-note' onClick={handleClick} onContextMenu={event => handleRightClick(event)}>
                {note}
            </StyledNote>
        </div>
    )
}

export default VirtualGuitarNote;