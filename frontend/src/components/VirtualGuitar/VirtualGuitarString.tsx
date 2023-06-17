import { FC, ReactElement } from 'react';
import VirtualGuitarNote from './VirtualGuitarNote';

const VirtualGuitarString: FC = (): ReactElement => {
    return (
        <div className='virtual-guitar-string'>
                <VirtualGuitarNote />
                <VirtualGuitarNote />
                <VirtualGuitarNote />
                <VirtualGuitarNote />
                <VirtualGuitarNote />
                <VirtualGuitarNote />
                <VirtualGuitarNote />
                <VirtualGuitarNote />
                <VirtualGuitarNote />
                <VirtualGuitarNote />
                <VirtualGuitarNote />
                <VirtualGuitarNote />
                <VirtualGuitarNote />
                <VirtualGuitarNote />
                <VirtualGuitarNote />
        </div>
    )
}

export default VirtualGuitarString;