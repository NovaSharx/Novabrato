import { FC, ReactElement, useContext } from 'react';
import VirtualGuitarNote from './VirtualGuitarNote';
import { VirtualGuitarContext } from '../Contexts/VirtualGuitarContext';

interface VirtualGuitarStringProps {
    stringNote: string,
    stringOctave: number
}

const VirtualGuitarString: FC<VirtualGuitarStringProps> = ({ stringNote, stringOctave }): ReactElement => {

    const { noteLibrary, baseFrequencyLibrary } = useContext(VirtualGuitarContext)!

    const noteIndex: number = noteLibrary.indexOf(stringNote)
    let stringNotesArray: string[] = []
    let stringFrequencyArray: number[] = []

    for (let iteration: number = 0; iteration < 25; iteration++) {
        let index: number = (iteration + noteIndex) % noteLibrary.length
        let currentOctave: number = Math.floor((iteration + noteIndex) / noteLibrary.length) + stringOctave

        const recursivelyMultiplyByTwo = (num: number, recursiveDepth: number = currentOctave): number => {
            if (recursiveDepth <= 0) {
                return num
            } else {
                return recursivelyMultiplyByTwo(num * 2, recursiveDepth - 1)
            }
        }

        let frequency: number = recursivelyMultiplyByTwo(baseFrequencyLibrary[index])

        stringFrequencyArray.push(frequency)
        stringNotesArray.push(noteLibrary[index])
    }

    stringNotesArray.shift() // Adjustment for having first note out of <span>

    const renderVirtualGuitarNotes: JSX.Element[] = stringNotesArray.map((note: string, index: number) => {
        return (
            <VirtualGuitarNote key={index} note={note} frequency={stringFrequencyArray[index + 1]} />
        )
    })

    return (
        <div className='virtual-guitar-string'>
            <VirtualGuitarNote note={stringNote} frequency={stringFrequencyArray[0]} />
            <span>
                {renderVirtualGuitarNotes}
            </span>
        </div>
    )
}

export default VirtualGuitarString;