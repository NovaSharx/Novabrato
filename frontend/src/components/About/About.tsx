import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const About: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    return (
        <div id='about' style={{
            backgroundColor: theme.palette.background.secondary
        }}>

            <div className='main-section-container'>
                <div className='main-section' style={{ color: theme.palette.text.primary }}>

                    <h2 className='page-title' style={{ borderBottom: `2px solid ${theme.palette.divider.tertiary}` }}>
                        ABOUT
                    </h2>

                </div>
            </div>

        </div>
    );
};

export default About;