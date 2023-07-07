import { FC, ReactElement, useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../contexts/ThemeContext';
import { VirtualGuitarContext } from '../contexts/VirtualGuitarContext';

const VirtualGuitarControlPanel: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const { noteLibrary, root, mode, noteLabel, setNoteLabel, calculateScaleNotes, scaleNotes, getTriadNotes } = useContext(VirtualGuitarContext)!

    const VirtualGuitarSelect = styled.select`
        color: ${theme.palette.text.primary};
        border-color: ${theme.palette.primary.main};
        &:hover {
            border-color: ${theme.palette.secondary.main};
        }
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

    const renderRootoptions: JSX.Element[] = noteLibrary.map((root: string, index: number): JSX.Element => {
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
                        {renderRootoptions}
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

            <div id='virtual-guitar-secondary-panel' style={{ borderColor: theme.palette.divider.tertiary }}>

                <div className='virtual-guitar-secondary-panel-item'>
                    <label htmlFor='virtual-guitar-triads' className='secondary-panel-label' style={{ color: theme.palette.text.primary }}>Triads</label>
                    <div id='virtual-guitar-triads'>
                        {scaleNotes.length ? renderTriadButtons : <p style={{color: theme.palette.text.disabled}}>Please selecta scale</p>}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VirtualGuitarControlPanel;