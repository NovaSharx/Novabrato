import * as Mui from '@mui/material';

import styled from '@emotion/styled';

import { VirtualGuitar } from '../../context/VirtualGuitar';
import { useContext } from 'react';

export default function VirtualGuitarNote({ note, frequency }) {

    const { selectedNotes, setSelectedNotes, playNote } = useContext(VirtualGuitar)

    const NoteButtonStyling = styled(Mui.Box)({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: selectedNotes.includes(note) ? 'white' : '#3EC199',
        fontFamily: 'Inter',
        fontSize: note.length < 2 ? '1.2em' : '0.8em',
        width: '40px',
        height: '40px',
        borderRadius: '40px',
        border: selectedNotes.includes(note) ? 'solid 1px #3EA7C1' : 'solid 1px #3EC199',
        backgroundColor: 'black',
        transition: '0.1s',
        '&:hover': {
            cursor: 'pointer',
            color: 'white',
            fontSize: '1.5em',
            border: 'solid 5px #3EA7C1'
        }
    })

    const handleClick = () => {
        playNote(frequency)
    }

    const handleRightClick = (event) => {
        event.preventDefault()
        const clickedNote = event.target.innerHTML

        if (!selectedNotes.includes(clickedNote)) {
            setSelectedNotes([...selectedNotes, event.target.innerHTML])
        } else {
            let updatedSelectedNotesArray = selectedNotes
            const indexToRemove = selectedNotes.indexOf(clickedNote)
            updatedSelectedNotesArray.splice(indexToRemove, 1)
            setSelectedNotes([...updatedSelectedNotesArray])
        }
    }

    return (
        <Mui.Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            WebkitUserSelect: 'none'
        }}>

            <Mui.Box sx={{
                height: '53px',
                width: '80px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <NoteButtonStyling
                    onClick={() => handleClick()}
                    onContextMenu={event => handleRightClick(event)}
                >
                    {note}
                </NoteButtonStyling>
            </Mui.Box>

        </Mui.Box>
    )
}