
import * as Mui from '@mui/material';
import VirtualGuitarString from './VirtualGuitarString';

export default function VirtualGuitarNeck() {

    return (
        <Mui.Box sx={{
            position: 'relative',
            padding: '5em 0',
            height: '350px',
            overflowX: 'scroll',
            '&::-webkit-scrollbar': {
                height: '20px'
            },
            '&::-webkit-scrollbar-button': {
                width: '60px'
            },
            '&::-webkit-scrollbar-track': {
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#3EC199',
                border: '5px solid #1F2928',
                borderRadius: '10px'
            },
            '&::-webkit-scrollbar-thumb:hover': {
                background: '#3EA7C1',
                border: '4px solid #1f2928c0'
            }
        }}>
            <img src="./guitar-neck/Neck.svg" alt="virtual guitar neck" style={{ position: 'absolute', width: '2580px', height: 'auto', left: '126px' }} />
            <img src="./guitar-neck/Frets.svg" alt="virtual guitar frets" style={{ position: 'absolute', width: '2600px', height: 'auto', left: '126px' }} />
            <img src="./guitar-neck/Strings.svg" alt="virtual guitar strings" style={{ position: 'absolute', width: '2622px', height: 'auto', top: '90px', left: '87px' }} />
            {/* <img src="./guitar-neck/Notes (Full).svg" alt="virtual guitar notes" style={{ position: 'absolute', width: '2622px', height: 'auto', top: '70px', left: '62px', opacity: '20%' }} /> */}

            <Mui.Box sx={{
                position: 'relative',
                left: '40px',
                bottom: '15px',
                width: '2663px',
                height: '307px',
                // backgroundColor: 'rgba(255, 0, 0, 0.2)'
            }}>
                <VirtualGuitarString stringTuning={'E'} />
                <VirtualGuitarString stringTuning={'B'} />
                <VirtualGuitarString stringTuning={'G'} />
                <VirtualGuitarString stringTuning={'D'} />
                <VirtualGuitarString stringTuning={'A'} />
                <VirtualGuitarString stringTuning={'E'} />
            </Mui.Box>

        </Mui.Box>
    )
}