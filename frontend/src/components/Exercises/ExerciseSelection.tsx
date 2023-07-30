import { FC, Fragment, ReactElement, ReactNode, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

interface CategoryProperties {
    [earTraining: string]: {
        title: string;
        prompt: string;
        exercises: {
            name: string;
            path: string;
        }[];
    };
}

type CategoryProp = {
    category: string;
}

const ExerciseSelection: FC<CategoryProp> = ({ category }): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const navigate = useNavigate();

    const BackButton = styled.span`
        border: 2px solid transparent;
        background-color: ${theme.palette.background.full};

        &:hover {
            border: 2px solid ${theme.palette.divider.secondary};
            background-color: transparent;
        }
    `

    const ExerciseButton = styled.span`
        color: ${theme.palette.text.secondary};
        background-color: ${theme.palette.background.full};

        &:hover {
            color: white;
            background-color: ${theme.palette.secondary.main};
            font-size: 5rem;
        }
    `

    const categories: CategoryProperties = {
        'ear-training': {
            title: 'Ear Training',
            prompt: 'Please choose an ear training exercise.',
            exercises: [
                {
                    name: 'Interval Training',
                    path: 'interval-training'
                },
                {
                    name: 'Note Recognition',
                    path: 'note-recognition'
                },
                {
                    name: 'Major & Minor Key Recognition',
                    path: 'major-&-minor-key-recognition'
                },
            ]
        },
        'theory-&-knowledge': {
            title: 'Theory & Knowledge',
            prompt: 'Please choose a theory and knowledge exercise.',
            exercises: [
                {
                    name: 'Coming Soon',
                    path: ''
                },
                {
                    name: 'Coming Soon',
                    path: ''
                },
                {
                    name: 'Coming Soon',
                    path: ''
                },
            ]
        }
    }

    return (
        <Fragment>
            <BackButton id='back-button' onClick={() => navigate('..')}>
                Go back
            </BackButton>

            <h3 id='exercise-category-title'>
                {categories[category].title}
            </h3>

            <p id='exercise-content-prompt' style={{ color: theme.palette.text.secondary }}>Please choose a skill to practice.</p>

            <div id='category-exercises'>
                {categories[category].exercises.map((exercise, index): ReactNode => {
                    return (
                        <ExerciseButton key={index} className='category-exercise-button' onClick={() => navigate(exercise.path)}>
                            <span className='exercise-name'>{exercise.name}</span>
                        </ExerciseButton>
                    )
                })}
            </div>
        </Fragment>

    );
};

export default ExerciseSelection;