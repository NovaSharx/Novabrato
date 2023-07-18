import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const About: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    return (
        <div id='about' className='main-section-container' style={{
            backgroundColor: theme.palette.background.secondary
        }}>
            About
        </div>
    );
};

export default About;