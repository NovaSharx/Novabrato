import { FC, Fragment, ReactElement, useContext, useState } from 'react';
import { ThemeContext } from '../../../Contexts/ThemeContext';
import { VirtualGuitarContext } from '../../../Contexts/VirtualGuitarContext';
import styled from '@emotion/styled';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

type IntervalRangeProp = {
    intervalRange: number
}

const IntervalTrainingExercise: FC<IntervalRangeProp> = ({ intervalRange }): ReactElement => {

    const { theme } = useContext(ThemeContext)!;

    const { noteLibrary, baseFrequencyLibrary, playNote } = useContext(VirtualGuitarContext)!;

    // Generates all possible note frequencies for interval practice
    function generateFullFrequencyArray(): number[] {
        let frequencyArray: number[] = []

        for (let iteration: number = 24; iteration < 84; iteration++) {
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

    // An array of all possible notes for this exercise
    const fullFrequencyArray: number[] = generateFullFrequencyArray()

    // Outputs the first interval note by calculating a random number between "more than the interval range" and "less than the difference of the maximum range and the interval range".
    function getFirstNoteIndex(): number {
        let minRange: number = intervalRange;
        let maxRange: number = (fullFrequencyArray.length - 1) - intervalRange;
        return Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
    }

    // Outputs the second interval note by calculating a random number less than, equal to or more than the first note index within the interval range.
    function getSecondNoteIndex(noteIndex: number): number {
        let minRange: number = noteIndex - intervalRange;
        let maxRange: number = noteIndex + intervalRange;
        return Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
    }

    const [firstNoteIndex, setFirstNoteIndex] = useState<number>(getFirstNoteIndex());
    const [secondNoteIndex, setSecondNoteIndex] = useState<number>(getSecondNoteIndex(firstNoteIndex));
    const [selectedNoteIndex, setSelectedNoteIndex] = useState<number>(firstNoteIndex);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);

    const NoteChangeButton = styled.span`
        border-color: transparent;
        background-color: ${theme.palette.background.full};

        &:hover {
            border-color: ${theme.palette.primary.main};
        }
    `

    const NoteSelectButton = styled.span`
        color: inherit;
        border-color: transparent;
        background-color: transparent;
        box-shadow: 0rem 0.2rem 0rem 0.4rem ${theme.palette.shadow.primary};

        &:hover {
            color: ${theme.palette.primary.main};
            border-color: ${theme.palette.primary.main};
            background-color: ${theme.palette.background.full};
            box-shadow: 0rem 0.3rem 0rem 0.4rem transparent;
        }
    `

    const PlayNoteButton = styled.span`
        border-color: transparent;
        background-color: ${theme.palette.background.primary};
        box-shadow: 0rem 0rem 0.8rem 0.1rem ${theme.palette.shadow.primary};

        &:hover {
            border-color: ${theme.palette.primary.main};
            background-color: transparent;
            box-shadow: 0rem 0rem 0rem 0rem ${theme.palette.shadow.primary};
        }
    `

    // Limits note selection within the interval range.
    function updateSelectedNoteIndex(amount: number): void {
        let updatedSelectedNoteIndex: number = selectedNoteIndex + amount;

        if (updatedSelectedNoteIndex < (firstNoteIndex - intervalRange) || updatedSelectedNoteIndex > (firstNoteIndex + intervalRange)) {
            return;
        } else {
            setSelectedNoteIndex(updatedSelectedNoteIndex);
        }
    }

    const renderNoteSelection = (
        <div id='interval-training-selection-window'>

            <div id='note-interval-window'>

                <PlayNoteButton className='play-note-button' onClick={() => { playNote(fullFrequencyArray[firstNoteIndex]) }}>
                    <span className='play-note-button-title'>Play First Note</span>
                    <span className='play-note-button-value'>Note: <span>{noteLibrary[firstNoteIndex % 12]}</span></span>
                    <span className='play-note-button-value'>Octave: <span>{Math.floor(firstNoteIndex / 12) + 2}</span></span>
                    <VolumeUpIcon className='play-note-button-overlay' style={{ color: theme.palette.text.disabled }} />
                </PlayNoteButton>

                <PlayNoteButton className='play-note-button' onClick={() => { playNote(fullFrequencyArray[secondNoteIndex]) }}>
                    <span className='play-note-button-title'>Play Second Note</span>
                    <span className='play-note-button-value'>Note: <span>?</span></span>
                    <span className='play-note-button-value'>Octave: <span>?</span></span>
                    <VolumeUpIcon className='play-note-button-overlay' style={{ color: theme.palette.text.disabled }} />
                </PlayNoteButton>

            </div>

            <div id='note-selection-window'>

                <NoteChangeButton className='note-change-button' style={{ color: selectedNoteIndex < (firstNoteIndex + intervalRange) ? 'inherit' : theme.palette.text.disabled }} onClick={() => updateSelectedNoteIndex(1)}>
                    +
                </NoteChangeButton>

                <NoteSelectButton id='note-select-button' key={selectedNoteIndex} onClick={() => { setSelectedAnswerIndex(selectedNoteIndex) }}>
                    {noteLibrary[selectedNoteIndex % 12]}
                </NoteSelectButton>

                <NoteChangeButton className='note-change-button' style={{ color: selectedNoteIndex > (firstNoteIndex - intervalRange) ? 'inherit' : theme.palette.text.disabled }} onClick={() => updateSelectedNoteIndex(-1)}>
                    -
                </NoteChangeButton>
            </div>

            <div id='octave-window'>
                Octave: <span>{Math.floor(selectedNoteIndex / 12) + 2}</span>
            </div>

        </div>
    )

    const renderResultScreen = (
        <div>
            <div>First Note: Note: {noteLibrary[firstNoteIndex % 12]} Octave: {Math.floor(firstNoteIndex / 12) + 2}</div>
            <div>Choice: Note: {noteLibrary[selectedAnswerIndex! % 12]} Octave: {Math.floor(selectedNoteIndex / 12) + 2}</div>
            <div>Answer: Note: {noteLibrary[secondNoteIndex % 12]} Octave: {Math.floor(secondNoteIndex / 12) + 2}</div>
        </div>
    )

    return (
        <Fragment>

            <p id='exercise-content-prompt' style={{ color: theme.palette.text.secondary }}>
                Select the correct note played at the second note of the interval.
            </p>

            <div id='interval-training-window'>

                {selectedAnswerIndex ? renderResultScreen : renderNoteSelection}

            </div>

        </Fragment >
    );
};

export default IntervalTrainingExercise;