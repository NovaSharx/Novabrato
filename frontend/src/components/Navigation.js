import * as Mui from '@mui/material';

import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {

    const theme = useTheme()
    const navigate = useNavigate()

    return (
        <Mui.AppBar position='fixed' elevation={0} sx={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(5px)'
        }}>
            <Mui.Container maxWidth='x1'>
                <Mui.Toolbar disableGutters>

                    <Mui.Grid container direction='row'>

                        <Mui.Grid item xs sx={{ display: 'flex' }}>
                            <Mui.Link component='button' underline='none' onClick={() => navigate("/")}>
                                <Mui.Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '2em', color: 'white' }}>
                                    <span style={{ color: theme.palette.primary.main }}>NOVA</span>
                                    BRATO
                                </Mui.Typography>
                            </Mui.Link>
                        </Mui.Grid>

                        <Mui.Grid item xs={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>

                            <Mui.Link component='button' underline='none' onClick={() => navigate("/")}>
                                <Mui.Typography color='white' fontSize={20} pl={3}>Fretboard</Mui.Typography>
                            </Mui.Link>

                            <Mui.Link component='button' underline='none' onClick={() => navigate("/")}>
                                <Mui.Typography color='white' fontSize={20} pl={3}>Exercises</Mui.Typography>
                            </Mui.Link>

                            <Mui.Link component='button' underline='none' onClick={() => navigate("/")}>
                                <Mui.Typography color='white' fontSize={20} pl={3}>About</Mui.Typography>
                            </Mui.Link>

                            <Mui.Link component='button' underline='none' onClick={() => navigate("/")}>
                                <Mui.Typography color='white' fontSize={20} pl={3}>Login</Mui.Typography>
                            </Mui.Link>

                        </Mui.Grid>

                    </Mui.Grid>

                </Mui.Toolbar>
            </Mui.Container>
        </Mui.AppBar>
    )
}