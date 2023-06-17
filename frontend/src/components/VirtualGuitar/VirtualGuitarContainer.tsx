import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import VirtualGuitarNeck from './VirtualGuitarNeck';

const VirtualGuitarContainer: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    return (
        <div className='main-section-container'>
            <div id='virtual-guitar-container' className='main-section' style={{
                backgroundColor: theme.palette.background.primary,
                boxShadow: `0rem 0rem 1rem 0rem rgba(0,0,0,0.75)`,
            }}>
                <div id='virtual-guitar-title'>
                    <h2 style={{
                        color: theme.palette.text.primary
                    }}>
                        VIRTUAL GUITAR
                    </h2>
                </div>

                <div id='virtual-guitar-content'>
                    <div id='virtual-guitar-control-panel'>
                        Virtual Guitar Control Panel
                    </div>
                    <div id='virtual-guitar-fretboard-container'>
                        <VirtualGuitarNeck />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VirtualGuitarContainer;