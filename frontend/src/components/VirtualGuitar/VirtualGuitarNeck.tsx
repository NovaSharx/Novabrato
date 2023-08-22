import { FC, ReactElement, useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from '@emotion/styled';
import VirtualGuitarString from './VirtualGuitarString';
import SettingsIcon from '@mui/icons-material/Settings';
import { VirtualGuitarContext } from '../contexts/VirtualGuitarContext';
import VirtualGuitarNoteTuner from './VirtualGuitarNoteTuner';

const VirtualGuitarNeck: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const { guitarTuning } = useContext(VirtualGuitarContext)!

    const [showGuitarTuningDialog, setShowGuitarTuningDialog] = useState<boolean>(false)

    const StyledStringContainer = styled.div`
        &::-webkit-scrollbar-track {
            background-color: ${theme.dark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${theme.palette.primary.main};
        }

        &::-webkit-scrollbar-thumb:hover {
            background: ${theme.palette.secondary.main};
        }
    `;

    const FretMarker = styled.span`
        color: ${theme.palette.text.disabled}
    `

    const GuitarSettingsButton = styled.span`
        color: ${theme.palette.primary.main}
    `

    const renderGuitarAside: JSX.Element[] = Array.from(Array(25).keys()).map((marker: number): JSX.Element => {

        const boldMarker: number[] = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24]

        if (marker === 0) {
            return (
                <GuitarSettingsButton key={marker} id='virtual-guitar-settings-button' onClick={() => setShowGuitarTuningDialog(true)}>
                    <SettingsIcon id='virtual-guitar-settings-icon' style={{ borderColor: theme.palette.primary.main }} />
                </GuitarSettingsButton>
            )
        } else if (boldMarker.includes(marker)) {
            return (
                <FretMarker key={marker} className='virtual-guitar-fret-marker' style={{ color: theme.palette.text.primary, fontSize: '1.3em' }}>{marker}</FretMarker>
            )
        } else {
            return (
                <FretMarker key={marker} className='virtual-guitar-fret-marker'>{marker}</FretMarker>
            )
        }
    })

    return (
        <StyledStringContainer id='virtual-guitar-neck-container'>
            <div id='virtual-guitar-neck'>
                <VirtualGuitarString stringNote={guitarTuning.sixthString.note} stringOctave={guitarTuning.sixthString.octave} />
                <VirtualGuitarString stringNote={guitarTuning.fifthString.note} stringOctave={guitarTuning.fifthString.octave} />
                <VirtualGuitarString stringNote={guitarTuning.forthString.note} stringOctave={guitarTuning.forthString.octave} />
                <VirtualGuitarString stringNote={guitarTuning.thirdString.note} stringOctave={guitarTuning.thirdString.octave} />
                <VirtualGuitarString stringNote={guitarTuning.secondString.note} stringOctave={guitarTuning.secondString.octave} />
                <VirtualGuitarString stringNote={guitarTuning.firstString.note} stringOctave={guitarTuning.firstString.octave} />
            </div>

            <div id='virtual-guitar-aside'>
                {renderGuitarAside}
            </div>

            {showGuitarTuningDialog &&
                <div id='guitar-tuning-dialog-backdrop'>
                    <div id='guitar-tuning-dialog'
                        style={{
                            color: theme.palette.text.primary,
                            backgroundColor: theme.palette.background.primary,
                            border: `2px solid ${theme.palette.divider.primary}`
                        }}>

                        <span id='guitar-tuning-title'>
                            Change Guitar Tuning
                        </span>

                        <div id='guitar-tuning-strings'>
                            <VirtualGuitarNoteTuner key={1} tunerNote={guitarTuning.firstString.note} tunerOctave={guitarTuning.firstString.octave} tunerId={'firstString'} />
                            <VirtualGuitarNoteTuner key={2} tunerNote={guitarTuning.secondString.note} tunerOctave={guitarTuning.secondString.octave} tunerId={'secondString'} />
                            <VirtualGuitarNoteTuner key={3} tunerNote={guitarTuning.thirdString.note} tunerOctave={guitarTuning.thirdString.octave} tunerId={'thirdString'} />
                            <VirtualGuitarNoteTuner key={4} tunerNote={guitarTuning.forthString.note} tunerOctave={guitarTuning.forthString.octave} tunerId={'forthString'} />
                            <VirtualGuitarNoteTuner key={5} tunerNote={guitarTuning.fifthString.note} tunerOctave={guitarTuning.fifthString.octave} tunerId={'fifthString'} />
                            <VirtualGuitarNoteTuner key={6} tunerNote={guitarTuning.sixthString.note} tunerOctave={guitarTuning.sixthString.octave} tunerId={'sixthString'} />
                        </div>

                        <div id='guitar-tuning-dialog-actions'>
                            <button onClick={() => setShowGuitarTuningDialog(false)}>Exit</button>
                        </div>

                    </div>
                </div>
            }
        </StyledStringContainer>
    )
}

export default VirtualGuitarNeck;