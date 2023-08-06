import { FC, Fragment, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const CategorySelection: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

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

            <h2 className='page-title' style={{ borderBottom: `2px solid ${theme.palette.divider.tertiary}` }}>
                <a href="/exercises">EXERCISE</a>
            </h2>

            <div id='exercise-content'>
                <p id='exercise-content-prompt' style={{ color: theme.palette.text.secondary }}>Please choose an exercise category</p>

                <div id='exercise-categories'>

                    <CategoryButton className='exercise-category' onClick={() => navigate('ear-training')}>
                        <span>Ear Training</span>
                    </CategoryButton>

                    <CategoryButton className='exercise-category' onClick={() => navigate('theory-&-knowledge')}>
                        <span>Theory & Knowledge</span>
                    </CategoryButton>

                </div>
            </div>

        </Fragment>

    );
};

export default CategorySelection;