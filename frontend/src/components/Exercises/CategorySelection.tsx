import { FC, Fragment, ReactElement, ReactNode, useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from '@emotion/styled';
import { Outlet, useNavigate } from 'react-router-dom';
import ExerciseSelection from './ExerciseSelection';

const CategorySelection: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const [category, setCategory] = useState('')

    const navigate = useNavigate();

    const CategoryButton = styled.span`
        background-color: ${theme.palette.background.primary};

        &:hover {
            color: white;
            background-color: ${theme.palette.secondary.main};
            box-shadow: 0rem 0rem 2rem 0rem ${theme.palette.shadow.primary};
        }
    `;

    return (
        <Fragment>
            
            <p id='exercise-selection-prompt' style={{ color: theme.palette.text.secondary }}>Please choose an exercise category.</p>

            <div id='exercise-categories'>

                <CategoryButton className='exercise-category' onClick={() => navigate('ear-training')}>
                    <span>Ear Training</span>
                </CategoryButton>

                <CategoryButton className='exercise-category' onClick={() => navigate('theory-&-knowledge')}>
                    <span>Theory & Knowledge</span>
                </CategoryButton>

            </div>

        </Fragment>

    );
};

export default CategorySelection;