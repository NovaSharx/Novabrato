import { FC, Fragment, ReactElement, useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { VirtualGuitarContext } from '../../../contexts/VirtualGuitarContext';

type IntervalRangeProp = {
    intervalRange: number
}

const IntervalTrainingExercise: FC<IntervalRangeProp> = ({ intervalRange }): ReactElement => {

    const { theme } = useContext(ThemeContext)!;

    const { noteLibrary, baseFrequencyLibrary } = useContext(VirtualGuitarContext)!;

    // Generates all possible note frequencies for interval practice
    function generateFullFrequencyArray(): number[] {
        let frequencyArray: number[] = []

        for (let iteration: number = 0; iteration < 84; iteration++) {
            let index: number = iteration % noteLibrary.length
            let currentOctave: number = Math.floor(iteration / noteLibrary.length) // Find current Octave

            const recursivelyMultiplyByTwo = (num: number, recursiveDepth: number = currentOctave): number => {
                if (recursiveDepth <= 0) {
                    return num
                } else {
                    return recursivelyMultiplyByTwo(num * 2, recursiveDepth - 1)
                }
            }

            let currentFrequency: number = recursivelyMultiplyByTwo(baseFrequencyLibrary[index])

            frequencyArray.push(currentFrequency)
        }

        return frequencyArray
    }

    const fullFrequencyArray: number[] = generateFullFrequencyArray()

    function getFirstNoteIndex(): number {
        let min: number = intervalRange;
        let max: number = (fullFrequencyArray.length - 1) - intervalRange;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const firstNoteIndex = getFirstNoteIndex()

    function getSecondNoteIndex(firstNote: number): number {
        let min: number = firstNote - intervalRange;
        let max: number = firstNote + intervalRange;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <Fragment>

            <p id='exercise-content-prompt' style={{ color: theme.palette.text.secondary }}>
                Select the correct note played in the interval.
            </p>

            <div id='interval-training-window'>

                {firstNoteIndex} - {getSecondNoteIndex(firstNoteIndex)}

            </div>

        </Fragment >
    );
};

export default IntervalTrainingExercise;