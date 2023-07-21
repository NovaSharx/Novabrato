import { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from '@emotion/styled';

const Exercises: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const CategoryButton = styled.span`
        background-color: ${theme.palette.background.primary};

        &:hover {
            color: white;
            background-color: ${theme.palette.secondary.main};
            box-shadow: 0rem 0rem 2rem 0rem ${theme.palette.shadow.primary};
        }
    `;

    return (
        <div id='exercises' style={{
            backgroundColor: theme.palette.background.secondary
        }}>

            <div className='main-section-container'>
                <div className='main-section' style={{ color: theme.palette.text.primary }}>

                    <h2 style={{ borderBottom: `2px solid ${theme.palette.divider.tertiary}` }}>
                        EXERCISES
                    </h2>

                    <div id='exercise-selection'>

                        <p id='exercise-selection-prompt' style={{ color: theme.palette.text.secondary }}>Please choose a skill to practice.</p>

                        <div id='exercise-categories'>

                            <CategoryButton className='exercise-category'>
                                <span>Ear Training</span>
                            </CategoryButton>

                            <CategoryButton className='exercise-category'>
                                <span>Theory & Knowledge</span>
                            </CategoryButton>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Exercises;