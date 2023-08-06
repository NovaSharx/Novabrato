import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import { Outlet } from 'react-router-dom';

const Exercises: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    return (
        <div id='exercises' style={{
            backgroundColor: theme.palette.background.secondary
        }}>

            <div className='main-section-container'>
                <div className='main-section' style={{ color: theme.palette.text.primary }}>

                    <Outlet />

                </div>
            </div>
        </div>
    );
};

export default Exercises;