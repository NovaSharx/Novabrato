import { FC, ReactElement } from 'react';
import VirtualGuitarString from './VirtualGuitarString';

const VirtualGuitarNeck: FC = (): ReactElement => {
    return (
        <div className='virtual-guitar-neck-container'>
            <div className='virtual-guitar-neck'>
                <VirtualGuitarString />
                <VirtualGuitarString />
                <VirtualGuitarString />
                <VirtualGuitarString />
                <VirtualGuitarString />
                <VirtualGuitarString />
            </div>

            <div className='virtual-guitar-fret-labels'>
                Virtual Guitar Fret Labels
            </div>
        </div>
    )
}

export default VirtualGuitarNeck;