import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';

const Footer: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    return (
        <div id='footer' className='main-section-container' style={{
            backgroundColor: theme.palette.background.full
        }}>
            <div className='main-section'>

                <div id='footer-bottom'>
                    <span style={{ color: theme.palette.text.primary }}>© Copyright 2023 | Davin Jones</span>
                </div>

            </div>
        </div>
    );
};

export default Footer;