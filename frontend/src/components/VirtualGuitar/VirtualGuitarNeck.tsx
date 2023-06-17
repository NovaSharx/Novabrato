import { FC, ReactElement } from 'react';
import VirtualGuitarString from './VirtualGuitarString';

const VirtualGuitarNeck: FC = (): ReactElement => {
    return (
        <div className='virtual-guitar-neck'>
            <VirtualGuitarString />
            <VirtualGuitarString />
            <VirtualGuitarString />
            <VirtualGuitarString />
            <VirtualGuitarString />
            <VirtualGuitarString />
        </div>
    )
}

export default VirtualGuitarNeck;