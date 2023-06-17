import { FC, ReactElement } from 'react';

const VirtualGuitarNote: FC = (): ReactElement => {
    return (
        <div className='virtual-guitar-fret'>
            <div className='virtual-guitar-note'>
                A#
            </div>
        </div>
    )
}

export default VirtualGuitarNote;