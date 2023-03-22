import * as Mui from '@mui/material';

import styled from '@emotion/styled';
import VirtualGuitarNote from './VirtualGuitarNote';

export default function VirtualGuitarString({ stringTuning }) {

    const NoteButtonStyling = styled(Mui.Box)({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#3EC199',
        fontFamily: 'Inter',
        fontSize: '1.2em',
        width: '40px',
        height: '40px',
        borderRadius: '40px',
        border: 'solid 1px #3EC199',
        backgroundColor: 'black',
        '&:hover': {
            cursor: 'pointer',
            color: 'white',
            width: '35px',
            height: '35px',
            border: 'solid 3px #3EA7C1'
        }
    })

    const noteLibrary = [
        'A',
        'A#/Bb',
        'B',
        'C',
        'C#/Db',
        'D',
        'D#/Eb',
        'E',
        'F',
        'F#/Gb',
        'G',
        'G#/Ab'
    ]

    const noteIndex = noteLibrary.indexOf(stringTuning)
    let stringNotesArray = []

    for (let iteration = 0; iteration < 25; iteration++) {
        let index = (iteration + noteIndex) % noteLibrary.length

        stringNotesArray.push(noteLibrary[index])
    }

    const renderVirtualGuitarNotes = stringNotesArray.map((note, index) => {
        return (
            <VirtualGuitarNote key={index} note={note} />
        )
    })

    return (
        <Mui.Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>

            {renderVirtualGuitarNotes}

        </Mui.Box>
    )
}