import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Outlet } from 'react-router-dom';

const Exercises: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    return (
        <div id='exercises' style={{
            backgroundColor: theme.palette.background.secondary
        }}>

            <div className='main-section-container'>
                <div className='main-section' style={{ color: theme.palette.text.primary }}>

                    <h2 className='page-title' style={{ borderBottom: `2px solid ${theme.palette.divider.tertiary}` }}>
                        EXERCISES
                    </h2>

                    <div id='exercise-content'>
                        <Outlet />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Exercises;