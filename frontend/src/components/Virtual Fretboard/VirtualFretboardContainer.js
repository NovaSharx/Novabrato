import * as Mui from '@mui/material';

import VirtualGuitarProvider from '../context/VirtualGuitar';

import VirtualGuitarSettings from './virtual guitar settings/VirtualGuitarSettings';

import VirtualGuitar from './virtual guitar/VirtualGuitarNeck';

export default function VirtualGuitarContainer() {

    return (
        <Mui.Container maxWidth='xl'>
            <Mui.Box sx={{
                p: 5,
                borderRadius: '20px',
                background: 'rgba(0,0,0,0.9)',
                backdropFilter: 'blur(5px)'
            }}>
                <Mui.Typography variant='h2' sx={{
                    p: 5,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    background: 'linear-gradient(0deg, rgba(62, 193, 153, 1) 50%, rgba(62, 167, 193, 1) 60%)',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>
                    VIRTUAL FRETBOARD
                </Mui.Typography>

                <VirtualGuitarProvider>
                    <VirtualGuitarSettings />
                    <VirtualGuitar />
                </VirtualGuitarProvider>

            </Mui.Box>
        </Mui.Container>
    )
}