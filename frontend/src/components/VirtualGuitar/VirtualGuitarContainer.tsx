import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import VirtualGuitarNeck from './VirtualGuitarNeck';

const VirtualGuitarContainer: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    return (
        <div className='main-section-container'>
            <div className='virtual-guitar-container main-section' style={{
                backgroundColor: theme.palette.background.primary,
            }}>
                <div className='virtual-guitar-title'>
                    <h2 style={{
                        color: theme.palette.text.primary
                    }}>
                        VIRTUAL GUITAR
                    </h2>
                </div>

                <div className='virtual-guitar-content'>
                    <div className='virtual-guitar-control-panel'>
                        Virtual Guitar Control Panel
                    </div>
                    <div className='virtual-guitar-fretboard-container'>
                        <VirtualGuitarNeck />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VirtualGuitarContainer;