import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Exercises: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    return (
        <div id='exercises' className='main-section-container' style={{
            backgroundColor: theme.palette.background.secondary
        }}>
            Exercises
        </div>
    );
};

export default Exercises;