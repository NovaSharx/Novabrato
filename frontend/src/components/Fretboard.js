import * as Mui from '@mui/material';

import VirtualFretboardContainer from './Virtual Fretboard/VirtualFretboardContainer';

export default function Fretboard() {

    return (
        <Mui.Box sx={{
            p: 5
        }}>
            <VirtualFretboardContainer />
        </Mui.Box>
    )
}