import * as Mui from '@mui/material';
import { Fragment } from 'react';
import HeroSection from './HeroSection';
import VirtualFretboard from './Virtual Fretboard/VirtualFretboardContainer';

export default function Home() {

    return (
        <Fragment>
            <HeroSection />
            <Mui.Typography variant='h2'>
                HOME
            </Mui.Typography>

            <VirtualFretboard />
        </Fragment>
    )
}