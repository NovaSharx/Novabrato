import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Exercises: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    return (
        <div id='exercises' style={{
            backgroundColor: theme.palette.background.secondary
        }}>

            <div className='main-section-container'>
                <div className='main-section'>

                    Exercises

                </div>
            </div>

        </div>
    );
};

export default Exercises;