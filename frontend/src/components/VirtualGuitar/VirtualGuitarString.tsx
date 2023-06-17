import { FC, ReactElement } from 'react';
import VirtualGuitarNote from './VirtualGuitarNote';

const VirtualGuitarString: FC = (): ReactElement => {
    return (
        <div className='virtual-guitar-string'>
            <VirtualGuitarNote />
            <span>
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
            </span>
        </div>
    )
}

export default VirtualGuitarString;