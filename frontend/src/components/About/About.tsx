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

                    <div id='about-content'>

                        <div>
                            <p><span>Novabrato</span> is a tool to help beginner guitar players learn <span>music theory</span> through <span>visual tools</span> and <span>interactive exercises.</span></p>
                            <br />
                            <p>When I started my journey as a beginner guitarist I wished that I had a convenient way of visualizing the notes of the fretboard.</p>
                            <br />
                            <p>I struggled to understanding certain music theory concepts and how they all relate to each other.</p>
                            <br />
                            <p>My <span>goal</span> is to give beginner guitar players that push to <span>not give up</span> and to continue to learn and <span>persevere</span> during this crucial stage in their journey.</p>
                            <br />
                            <p><span>So go on and have fun learning to play the guitar!</span></p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;