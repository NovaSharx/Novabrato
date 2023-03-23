import * as Mui from '@mui/material';

export default function Footer() {

    return (
        <Mui.Box sx={{
            width: '100%',
            height: '40px',
            color: 'white',
            backgroundColor: 'black'
        }}>
            <Mui.Typography variant='h6'>Footer Here</Mui.Typography>
        </Mui.Box>
    )
}