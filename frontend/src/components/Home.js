import * as Mui from '@mui/material';
import { Fragment } from 'react';
import HeroSection from './HeroSection';

export default function Home() {

    return (
        <Fragment>
            <HeroSection />
            <Mui.Typography>
                HOME
            </Mui.Typography>
        </Fragment>
    )
}