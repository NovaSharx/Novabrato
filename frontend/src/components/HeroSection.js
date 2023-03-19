import * as Mui from '@mui/material';

import Navigation from './Navigation';

export default function HeroSection() {

    return (
        <Mui.Box sx={{
            backgroundImage: 'url(guitar-music-strings-bass-guitar-wallpaper-preview.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backgroundBlendMode: 'multiply'
        }}>
            <Mui.Container className='hero-image' maxWidth='x1' disableGutters sx={{
                height: '800px',
                backdropFilter: 'blur(5px)'
            }}>

            </Mui.Container>
        </Mui.Box>
    )
}