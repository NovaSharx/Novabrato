import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { applyStyling } from '../../utility/ApplyStyling';

const VirtualGuitarNote: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const hoverInStyling = {
        color: 'white',
        border: `5px solid ${theme.palette.secondary.main}`
    }

    const hoverOutStyling = {
        color: theme.palette.primary.main,
        border: `2px solid ${theme.palette.primary.main}`
    }

    return (
        <div className='virtual-guitar-fret'>
            <div className='virtual-guitar-note'
                onMouseEnter={(e) => { applyStyling(e, hoverInStyling) }}
                onMouseLeave={(e) => { applyStyling(e, hoverOutStyling) }}
            >
                A#
            </div>
        </div>
    )
}

export default VirtualGuitarNote;