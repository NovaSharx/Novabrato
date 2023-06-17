import { FC, ReactElement } from 'react';
import VirtualGuitarNote from './VirtualGuitarNote';

const VirtualGuitarString: FC = (): ReactElement => {
    return (
        <div id='virtual-guitar-string'>
            <VirtualGuitarNote />
        </div>
    )
}

export default VirtualGuitarString;