import * as Mui from '@mui/material';

import styled from '@emotion/styled';

export default function VirtualGuitarNote({ note }) {

    const NoteButtonStyling = styled(Mui.Box)({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#3EC199',
        fontFamily: 'Inter',
        fontSize: '1.2em',
        width: '40px',
        height: '40px',
        borderRadius: '40px',
        border: 'solid 1px #3EC199',
        backgroundColor: 'black',
        '&:hover': {
            cursor: 'pointer',
            color: 'white',
            // width: '35px',
            // height: '35px',
            fontSize: '1.5em',
            border: 'solid 5px #3EA7C1'
        }
    })

    return (
        <Mui.Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>

            <Mui.Box sx={{ height: '53px',width: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <NoteButtonStyling>{note}</NoteButtonStyling>
            </Mui.Box>

        </Mui.Box>
    )
}