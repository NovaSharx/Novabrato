import * as Mui from '@mui/material';
import { useContext } from 'react';
import { VirtualGuitar } from '../../contexts/VirtualGuitar';

import VirtualGuitarNote from './VirtualGuitarNote';

export default function VirtualGuitarString({ stringNote, stringOctave }) {

    const { noteLibrary, baseFrequencyLibrary } = useContext(VirtualGuitar)

    const noteIndex = noteLibrary.indexOf(stringNote)
    let stringNotesArray = []
    let stringFrequencyArray = []

    for (let iteration = 0; iteration < 25; iteration++) {
        let index = (iteration + noteIndex) % noteLibrary.length
        let currentOctave = Math.floor((iteration + noteIndex) / noteLibrary.length) + stringOctave

        const recursivelyMultiplyByTwo = (num, recursiveDepth = currentOctave) => {
            if (recursiveDepth <= 0) {
                return num
            } else {
                return recursivelyMultiplyByTwo(num * 2, recursiveDepth - 1)
            }
        }

        let frequency = recursivelyMultiplyByTwo(baseFrequencyLibrary[index])

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