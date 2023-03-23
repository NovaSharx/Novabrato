import * as Mui from '@mui/material';

import VirtualGuitarNote from './VirtualGuitarNote';

export default function VirtualGuitarString({ stringNote, stringOctave }) {

    const noteLibrary = [
        'C',
        'C#/Db',
        'D',
        'D#/Eb',
        'E',
        'F',
        'F#/Gb',
        'G',
        'G#/Ab',
        'A',
        'A#/Bb',
        'B'
    ]

    const baseFrequencyLibrary = [
        16.35,
        17.32,
        18.35,
        19.45,
        20.60,
        21.83,
        23.12,
        24.50,
        25.96,
        27.50,
        29.14,
        30.87
    ]

    const noteIndex = noteLibrary.indexOf(stringNote)
    let stringNotesArray = []
    let stringFrequencyArray = []

    for (let iteration = 0; iteration < 25; iteration++) {
        let index = (iteration + noteIndex) % noteLibrary.length
        let currentOctave = Math.floor((iteration + noteIndex) / noteLibrary.length) + stringOctave

        const recursivelyMultiplyBYTwo = (num, recursiveDepth = currentOctave) => {
            if (recursiveDepth <= 0) {
                return num
            } else {
                return recursivelyMultiplyBYTwo(num * 2, recursiveDepth - 1)
            }
        }

        let frequency = recursivelyMultiplyBYTwo(baseFrequencyLibrary[index])

        stringFrequencyArray.push(frequency)
        stringNotesArray.push(noteLibrary[index])
    }

    const renderVirtualGuitarNotes = stringNotesArray.map((note, index) => {
        return (
            <VirtualGuitarNote key={index} note={note} frequency={stringFrequencyArray[index]} />
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