import * as Mui from '@mui/material';

export default function IntervalTrainingContainer() {

    return (
        <Mui.Container maxWidth='lg' sx={{
            p: 5
        }}>

            <Mui.Box sx={{
                p: 2,
                height: '500px',
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                background: 'rgba(0,0,0,0.9)',
                backdropFilter: 'blur(5px)'
            }}>

                <Mui.Typography>Interval Training Container</Mui.Typography>

            </Mui.Box>

        </Mui.Container>
    )
}