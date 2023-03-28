import * as Mui from '@mui/material';

import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import ProfileActions from './ProfileActions';

export default function Navigation() {

    const theme = useTheme()
    const navigate = useNavigate()

    return (
        <Mui.AppBar position='static' elevation={0} sx={{
            backgroundColor: 'rgba(0, 0, 0, 1)',
            backdropFilter: 'blur(5px)'
        }}>
            <Mui.Container maxWidth='x1'>
                <Mui.Toolbar disableGutters>

                    <Mui.Grid container direction='row'>

                        <Mui.Grid item xs={8} sx={{ display: 'flex' }}>
                            <Mui.Link component='button' underline='none' onClick={() => navigate("/")}>
                                <Mui.Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '2em', color: 'white' }}>
                                    <span style={{ color: theme.palette.primary.main }}>NOVA</span>
                                    BRATO
                                </Mui.Typography>
                            </Mui.Link>
                        </Mui.Grid>

                        <Mui.Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>

                            <Mui.Link component='button' underline='none' onClick={() => navigate("/fretboard")}>
                                <Mui.Typography color='white' fontSize={20} mr={5}>Fretboard</Mui.Typography>
                            </Mui.Link>

                            <Mui.Link component='button' underline='none' onClick={() => navigate("/exercises")}>
                                <Mui.Typography color='white' fontSize={20} mr={5}>Exercises</Mui.Typography>
                            </Mui.Link>

                            <ProfileActions />

                        </Mui.Grid>

                    </Mui.Grid>

                </Mui.Toolbar>
            </Mui.Container>
        </Mui.AppBar>
    )
}