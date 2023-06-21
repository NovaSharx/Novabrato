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

    const { highlightedNotes, setHighlightedNotes, playNote, scaleNotes, noteLabel, noteLabelLibrary } = useContext(VirtualGuitarContext)!

    const StyledNote = styled.div`
        color: ${highlightedNotes.includes(note) ? 'white'
            : scaleNotes.length ? scaleNotes.includes(note) ? theme.palette.primary.main : 'white'
                : theme.palette.primary.main};
        border-color: ${highlightedNotes.includes(note) ? theme.palette.secondary.main
            : scaleNotes.length ? scaleNotes.includes(note) ? theme.palette.primary.main : 'white'
                : theme.palette.primary.main};
        opacity: ${scaleNotes.length ? scaleNotes.includes(note) ? '100%' : '25%'
            : '100%'};
        pointer-events: ${scaleNotes.length ? scaleNotes.includes(note) ? 'auto' : 'none'
            : 'auto'};
        &:hover {
            color: white;
            border-color: ${theme.palette.secondary.main};
        }
    `;

    function handleClick(): void {
        playNote(frequency)
    }

    function handleRightClick(event: any): void {
        event.preventDefault();
        const clickedNote: string = event.target.innerHTML

        if (!highlightedNotes.includes(clickedNote)) {
            setHighlightedNotes([...highlightedNotes, clickedNote])
        } else {
            let updatedHighlightedNotesArray: string[] = highlightedNotes
            const indexToRemove: number = highlightedNotes.indexOf(clickedNote)
            updatedHighlightedNotesArray.splice(indexToRemove, 1)
            setHighlightedNotes([...updatedHighlightedNotesArray])
        }
    }

    function renderNote(): string {
        let displayNote: string = note
        if (scaleNotes.length && scaleNotes.includes(note)) {
            displayNote = noteLabelLibrary[noteLabel][noteLabelLibrary['notes'].indexOf(note)]
        }

        return displayNote
    }

    return (
        <div className='virtual-guitar-fret'>
            <StyledNote className='virtual-guitar-note' onClick={handleClick} onContextMenu={event => handleRightClick(event)}>
                {renderNote()}
            </StyledNote>
        </div>
    )
}

export default VirtualGuitarNote;