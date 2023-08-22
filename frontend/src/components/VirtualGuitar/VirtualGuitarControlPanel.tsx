import { FC, ReactElement, useContext, useState } from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../contexts/ThemeContext';
import { VirtualGuitarContext } from '../contexts/VirtualGuitarContext';

const VirtualGuitarControlPanel: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const { noteLibrary, root, mode, noteLabel, setNoteLabel, calculateScaleNotes, scaleNotes, getTriadNotes } = useContext(VirtualGuitarContext)!

    const [showSecondaryPanelDialog, setShowSecondaryPanelDialog] = useState<boolean>(false)
    const [showTriadsPanel, setShowTriadsPanel] = useState<boolean>(false)
    const [showChordConstructorPanel, setShowChordConstructorPanel] = useState<boolean>(false)
    const [showGuitarTuningDialog, setShowGuitarTuningDialog] = useState<boolean>(false)

    const VirtualGuitarSelect = styled.select`
        color: ${theme.palette.text.primary};
        border-color: ${theme.palette.primary.main};
        &:hover {
            border-color: ${theme.palette.secondary.main};
        }

        option {
            color: ${theme.palette.text.primary};
            background-color: ${theme.palette.background.secondary}
        }
    `;

    const SecondaryPanelButton = styled.div`
        color: ${theme.palette.primary.main};
        border-color: ${theme.palette.primary.main};
        transition: 0.5s;

        &:hover {
            color: white;
            border-color: ${theme.palette.secondary.main};
            background-color: ${theme.palette.secondary.main};
        }
    `;

    const SecondaryPanelItem = styled.div`
        border-color: ${theme.palette.divider.tertiary};
    `;

    const TriadButton = styled.span`
        color: ${theme.palette.text.primary};
        border-color: ${theme.palette.primary.main};

        &:hover {
            border-color: ${theme.palette.secondary.main};
        }
    `;

    const renderTriadButtons: JSX.Element[] = scaleNotes.map((root: string, index: number): JSX.Element => {

        return (
            <TriadButton key={index} className='triad-button'>
                <div className='triad-button-notes'>
                    {getTriadNotes(root).map((triadNote: string, idx: number): JSX.Element => {
                        return (
                            <span key={idx}>
                                {triadNote}
                            </span>
                        )
                    })}
                </div>
            </TriadButton>
        )
    })

    const renderRootOptions: JSX.Element[] = noteLibrary.map((root: string, index: number): JSX.Element => {
        return (
            <option key={index} value={root}>{root}</option>
        )
    })

    return (
        <div id='virtual-guitar-control-panel'>

            <div id='virtual-guitar-main-panel' style={{ borderColor: theme.palette.divider.tertiary }}>

                <div className='virtual-guitar-main-panel-item'>
                    <label htmlFor='virtual-guitar-root' className='main-panel-label' style={{ color: theme.palette.text.primary }}>ROOT</label>
                    <VirtualGuitarSelect id='virtual-guitar-root' className='main-panel-selection' value={root} onChange={(e) => calculateScaleNotes(e.target.value, mode)}>
                        <option value=''>--Please choose an option--</option>
                        {renderRootOptions}
                    </VirtualGuitarSelect>
                </div>

                <div className='virtual-guitar-main-panel-item'>
                    <label htmlFor='virtual-guitar-mode' className='main-panel-label' style={{ color: theme.palette.text.primary }}>MODE</label>
                    <VirtualGuitarSelect id='virtual-guitar-mode' className='main-panel-selection' value={mode} onChange={(e) => calculateScaleNotes(root, e.target.value)}>
                        <option value=''>--Please choose an option--</option>
                        <option value='ionian'>Ionian (Major Scale)</option>
                        <option value='aeolian'>Aeolian (Minor Scale)</option>
                        <option value='major-pentatonic'>Pentatonic (Major Scale)</option>
                        <option value='minor-pentatonic'>Pentatonic (Minor Scale)</option>
                    </VirtualGuitarSelect>
                </div>

                <div className='virtual-guitar-main-panel-item'>
                    <label htmlFor='virtual-guitar-note-label' className='main-panel-label' style={{ color: theme.palette.text.primary }}>NOTE LABEL</label>
                    <VirtualGuitarSelect id='virtual-guitar-note-label' className='main-panel-selection' value={noteLabel} onChange={(e) => setNoteLabel(e.target.value)}>
                        <option value='notes'>Notes</option>
                        <option value='degrees'>Degrees</option>
                        <option value='intervals'>Intervals</option>
                    </VirtualGuitarSelect>
                </div>

            </div>

            <div id='virtual-guitar-secondary-panel'>

                {showTriadsPanel &&
                    <SecondaryPanelItem className='virtual-guitar-secondary-panel-item'>
                        <span className='secondary-panel-label' style={{ color: theme.palette.text.primary }}>Triads</span>
                        <div id='virtual-guitar-triads'>
                            {scaleNotes.length ? renderTriadButtons : <p style={{ color: theme.palette.text.disabled }}>Please select a scale</p>}
                        </div>
                    </SecondaryPanelItem>
                }

                {showChordConstructorPanel &&
                    <SecondaryPanelItem className='virtual-guitar-secondary-panel-item'>
                        <span className='secondary-panel-label' style={{ color: theme.palette.text.primary }}>Chord Constructor</span>
                        <div id='virtual-guitar-chord-constructor'>
                            <p style={{ color: theme.palette.text.tertiary }}>Coming soon...</p>
                        </div>
                    </SecondaryPanelItem>
                }

                <SecondaryPanelButton id='secondary-panel-button' onClick={() => setShowSecondaryPanelDialog(true)}>
                    + / -
                </SecondaryPanelButton>

                {showSecondaryPanelDialog &&
                    <div id='add-secondary-panel-dialog-backdrop'>
                        <div id='add-secondary-panel-dialog'
                            style={{
                                color: theme.palette.text.primary,
                                backgroundColor: theme.palette.background.primary,
                                border: `2px solid ${theme.palette.divider.primary}`
                            }}>

                            <span id='add-secondary-panel-title'>
                                Add Secondary Panel
                            </span>

                            <div className='add-secondary-panel-option'>
                                <input type='checkbox' id='secondary-panel-dialog-triads' checked={showTriadsPanel} onChange={() => setShowTriadsPanel(!showTriadsPanel)} />
                                <label htmlFor='secondary-panel-dialog-triads'>Triads</label>
                            </div>

                            <div className='add-secondary-panel-option'>
                                <input type='checkbox' id='secondary-panel-dialog-chord-constructor' checked={showChordConstructorPanel} onChange={() => setShowChordConstructorPanel(!showChordConstructorPanel)} />
                                <label htmlFor='secondary-panel-dialog-chord-constructor'>Chord Constructor</label>
                            </div>

                            <div id='add-secondary-panel-dialog-actions'>
                                <button onClick={() => setShowSecondaryPanelDialog(false)}>Exit</button>
                            </div>

                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default VirtualGuitarControlPanel;