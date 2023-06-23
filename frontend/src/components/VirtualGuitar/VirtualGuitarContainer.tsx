import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import VirtualGuitarNeck from './VirtualGuitarNeck';
import VirtualGuitarControlPanel from './VirtualGuitarControlPanel';

const VirtualGuitarContainer: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    return (
        <div className='main-section-container'>
            <div className='main-section'>

                <div className='virtual-guitar-container' style={{
                    backgroundColor: theme.palette.background.tertiary,
                    boxShadow: `0rem 0rem 2rem 0rem ${theme.palette.shadow.primary}`
                }}>
                    <div className='virtual-guitar-title'>
                        <h2 style={{
                            color: theme.palette.text.primary
                        }}>
                            VIRTUAL GUITAR
                        </h2>
                    </div>

                    <div className='virtual-guitar-content'>

                        <VirtualGuitarControlPanel />

                        <div className='virtual-guitar-fretboard-container' style={{ borderColor: theme.palette.divider.tertiary }}>
                            <VirtualGuitarNeck />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VirtualGuitarContainer;