import * as Mui from '@mui/material';

import { Fragment } from 'react';

export default function Footer() {

    return (
        <Fragment>
            <Mui.Container maxWidth='x1' disableGutters>
                <Mui.Box sx={{
                    minHeigh: '500px',
                    color: 'white',
                    backgroundColor: 'black',
                }}>
                    <Mui.Typography variant='h6'>Footer Here</Mui.Typography>
                </Mui.Box>
            </Mui.Container>
        </Fragment>
    )
}