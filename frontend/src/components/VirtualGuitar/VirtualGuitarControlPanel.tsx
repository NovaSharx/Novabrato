import { FC, ReactElement, useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../contexts/ThemeContext';
import { VirtualGuitarContext } from '../contexts/VirtualGuitarContext';

const VirtualGuitarControlPanel: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const { noteLibrary } = useContext(VirtualGuitarContext)!

    const VirtualGuitarSelect = styled.select`
        color: ${theme.palette.text.primary};
        border-color: ${theme.palette.primary.main};
        background-color: ${theme.palette.background.primary};
        &:hover {
            border-color: ${theme.palette.secondary.main};
        }
    `;

    const renderRootoptions: JSX.Element[] = noteLibrary.map((root: string, index: number): JSX.Element => {
        return (
            <option key={index} value={root}>{root}</option>
        )
    })

    return (
        <div className='virtual-guitar-control-panel'>
            <div className='virtual-guitar-main-panel'>

                <div className='virtual-guitar-main-panel-item'>
                    <label htmlFor='virtual-guitar-root' className='main-panel-label' style={{ color: theme.palette.text.primary }}>ROOT</label>
                    <VirtualGuitarSelect id='virtual-guitar-root' className='main-panel-selection'>
                        <option value=''>--Please choose an option--</option>
                        {renderRootoptions}
                    </VirtualGuitarSelect>
                </div>

                <div className='virtual-guitar-main-panel-item'>
                    <label htmlFor='virtual-guitar-mode' className='main-panel-label' style={{ color: theme.palette.text.primary }}>MODE</label>
                    <VirtualGuitarSelect id='virtual-guitar-mode' className='main-panel-selection'>
                        <option value=''>--Please choose an option--</option>
                        <option value='ionian'>Ionian (Major Scale)</option>
                        <option value='aeolian'>Aeolian (Minor Scale)</option>
                        <option value='major-pentatonic'>Pentatonic (Major Scale)</option>
                        <option value='minor-pentatonic'>Pentatonic (Minor Scale)</option>
                    </VirtualGuitarSelect>
                </div>

                <div className='virtual-guitar-main-panel-item'>
                    <label htmlFor='virtual-guitar-note-label' className='main-panel-label' style={{ color: theme.palette.text.primary }}>NOTE LABEL</label>
                    <VirtualGuitarSelect id='virtual-guitar-note-label' className='main-panel-selection'>
                        <option value='notes'>Notes</option>
                        <option value='degrees'>Degrees</option>
                        <option value='intervals'>Intervals</option>
                    </VirtualGuitarSelect>
                </div>

            </div>
        </div>
    )
}

export default VirtualGuitarControlPanel;