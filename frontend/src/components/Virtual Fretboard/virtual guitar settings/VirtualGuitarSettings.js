import * as Mui from '@mui/material';

import TuneIcon from '@mui/icons-material/Tune';

export default function VirtualGuitarSettings() {

    return (
        <Mui.Box>
            <Mui.Grid container justifyContent='center' spacing={3} sx={{
                p: 3,
                color: 'white',
                minHeight: '300px',
            }}>

                <Mui.Grid item xs={4}>
                    <Mui.Box sx={{ minHeight: '300px', border: '2px solid #3EC199', borderRadius: '20px' }}>
                        Virtual Guitar Setting
                    </Mui.Box>
                </Mui.Grid>

                <Mui.Grid item xs={4}>
                    <Mui.Box sx={{ minHeight: '300px', border: '2px solid #3EC199', borderRadius: '20px' }}>
                        Virtual Guitar Setting
                    </Mui.Box>
                </Mui.Grid>

                <Mui.Grid item xs={4}>
                    <Mui.Box sx={{ minHeight: '300px', border: '2px solid #3EC199', borderRadius: '20px' }}>
                        Virtual Guitar Setting
                    </Mui.Box>
                </Mui.Grid>

                <Mui.Grid item xs={12}>
                    <Mui.Box sx={{ border: '2px solid #3EC199', borderRadius: '50px' }}>
                        <Mui.IconButton>
                            <TuneIcon sx={{ color: '#3EC199' }} />
                        </Mui.IconButton>
                    </Mui.Box>
                </Mui.Grid>

            </Mui.Grid>
        </Mui.Box>
    )
}