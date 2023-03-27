import * as Mui from '@mui/material';

import { Outlet, useNavigate } from 'react-router-dom';

export default function Exercises() {

    const navigate = useNavigate()

    return (
        <Mui.Box sx={{
            p: 5
        }}>

            <Mui.Container maxWidth='lg'>

                <Mui.Typography variant='h6'>Exercises</Mui.Typography>

                <Mui.Stack spacing={3}>
                    <Mui.Box component='button' onClick={() => navigate('interval-training')} sx={{
                        color: 'white',
                        height: '300px',
                        width: '300px',
                        borderRadius: 3,
                        background: 'url(guitar-music-strings-bass-guitar-wallpaper-preview.jpg)',
                        backgroundColor: 'grey',
                        backgroundBlendMode: 'multiply',
                        backgroundPosition: 'center center',
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }}>
                        <Mui.Typography>Interval Training</Mui.Typography>
                    </Mui.Box>
                </Mui.Stack>

            </Mui.Container>

        </Mui.Box>
    )
}