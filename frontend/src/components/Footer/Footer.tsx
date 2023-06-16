import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Footer: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    return (
        <div id='footer' className='main-section-container' style={{
            backgroundColor: theme.palette.background.tertiary
        }}>
            <div className='main-section'>
                Footer
            </div>
        </div>
    );
};

export default Footer;