import * as Mui from '@mui/material';

export default function HeroSection() {

    return (
        <Mui.Box sx={{
            backgroundImage: 'url(guitar-music-strings-bass-guitar-wallpaper-preview.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backgroundBlendMode: 'multiply'
        }}>
            <Mui.Container maxWidth='x1' disableGutters sx={{
                height: '600px',
                backdropFilter: 'blur(5px)'
            }}>
                <Mui.Box sx={{
                    position: 'relative',
                    height: 'inherit',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <img src="./guitar-overlay/Overlay_Guitar_Opening.svg" alt="guitar opening overlay" style={{ position: 'absolute', height: 'auto', width: '650px', objectFit: 'fill' }} />
                    <img src="./guitar-overlay/Overlay_Guitar_Strings.svg" alt="guitar strings overlay" style={{ position: 'fixed', height: 'inherit', width: '300px', objectFit: 'cover' }} />
                    <Mui.Box sx={{
                        display: 'flex',
                        height: 'inherit',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Mui.Typography variant='h1' color='white'>Practice Guitar</Mui.Typography>
                        <Mui.Typography variant='h1' color='#3EC199'>Improvisation</Mui.Typography>
                    </Mui.Box>
                </Mui.Box>

            </Mui.Container>
        </Mui.Box>
    )
}