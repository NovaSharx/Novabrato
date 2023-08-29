import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from '@emotion/styled';
import { VirtualGuitarContext } from '../contexts/VirtualGuitarContext';

interface VirtualGuitarNoteProps {
    note: string,
    noteIndexId: number,
    frequency: number
}

const VirtualGuitarNote: FC<VirtualGuitarNoteProps> = ({ note, noteIndexId, frequency }): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const { noteLibrary, highlightedNoteIds, setHighlightedNoteIds, playNote, scaleNotes, noteLabel, noteLabelLibrary } = useContext(VirtualGuitarContext)!

    const StyledNote = styled.div`
        color: ${highlightedNoteIds.includes(noteLibrary.indexOf(note)) ? 'white'
            : scaleNotes.length ? scaleNotes.includes(note) ? theme.palette.primary.main : 'white'
                : theme.palette.primary.main};
        border-width: ${highlightedNoteIds.includes(noteLibrary.indexOf(note)) ? '3px' : '1px'};
        border-color: ${highlightedNoteIds.includes(noteLibrary.indexOf(note)) ? theme.palette.secondary.main
            : scaleNotes.length ? scaleNotes.includes(note) ? theme.palette.primary.main : 'white'
                : theme.palette.primary.main};
        opacity: ${scaleNotes.length ? scaleNotes.includes(note) ? '100%' : '20%'
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

        if (!highlightedNoteIds.includes(noteIndexId)) {
            setHighlightedNoteIds([...highlightedNoteIds, noteIndexId])
        } else {
            let updatedHighlightedNoteIdsArray: number[] = highlightedNoteIds
            const indexToRemove: number = highlightedNoteIds.indexOf(noteIndexId)
            updatedHighlightedNoteIdsArray.splice(indexToRemove, 1)
            setHighlightedNoteIds([...updatedHighlightedNoteIdsArray])
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