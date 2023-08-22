import { FC, ReactElement, useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../contexts/ThemeContext';
import { VirtualGuitarContext } from '../contexts/VirtualGuitarContext';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

interface GuitarNoteTunerProps {
    tunerNote: string;
    tunerOctave: number;
    tunerId: string;
}

const VirtualGuitarNoteTuner: FC<GuitarNoteTunerProps> = ({ tunerNote, tunerOctave, tunerId }): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const { noteLibrary, guitarTuning, setGuitarTuning } = useContext(VirtualGuitarContext)!

    const octaveMultiplier = tunerOctave * 12 + noteLibrary.indexOf(tunerNote);

    const ChangeTuneButton = styled.div`
        color: ${theme.palette.primary.main};

        &:hover {
            cursor: pointer;
            color: ${theme.palette.primary.main};
        }
    `

    function updateNoteChange(noteChange: number): void {
        const updatedOctaveMultiplier: number = octaveMultiplier + noteChange;
        setGuitarTuning({ ...guitarTuning, [tunerId]: { note: noteLibrary[updatedOctaveMultiplier % 12], octave: Math.floor(updatedOctaveMultiplier / 12) } })
    }

    return (
        <div className='guitar-tuning-string'>

            <ChangeTuneButton onClick={() => { updateNoteChange(-1) }}>
                <ArrowCircleLeftOutlinedIcon className='guitar-tuning-change-icon' />
            </ChangeTuneButton>

            <div className='guitar-tuning-display'>
                <span className='guitar-tuning-display-section'>
                    Note: <span>{noteLibrary[octaveMultiplier % 12]}</span>
                </span>
                <span className='guitar-tuning-display-section'>
                    Octave: {Math.floor(octaveMultiplier / 12)}
                </span>
            </div>

            <ChangeTuneButton onClick={() => { updateNoteChange(1) }}>
                <ArrowCircleRightOutlinedIcon className='guitar-tuning-change-icon' />
            </ChangeTuneButton>
        </div>
    )
}

export default VirtualGuitarNoteTuner;