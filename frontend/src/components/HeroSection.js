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
                </Mui.Box>

                <Mui.Button>Hello</Mui.Button>

            </Mui.Container>
        </Mui.Box>
    )
}