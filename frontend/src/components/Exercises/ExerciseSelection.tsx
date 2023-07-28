import { FC, Fragment, ReactElement, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

interface CategoryProperties {
    [earTraining: string]: {
        title: string;
        prompt: string;
        exercises: {
            name: string;
        }[];
    };
}

type CategoryProp = {
    category: string;
}

const ExerciseSelection: FC<CategoryProp> = ({ category }): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const navigate = useNavigate();

    const categories: CategoryProperties = {
        'ear-training': {
            title: 'Ear Training',
            prompt: 'Please choose an ear training exercise.',
            exercises: [
                { name: 'Interval Training' },
                { name: 'Note Recognition' },
                { name: 'Major & Minor Key Recognition' },
            ]
        },
        'theory-&-knowledge': {
            title: 'Theory & Knowledge',
            prompt: 'Please choose a theory and knowledge exercise.',
            exercises: [
                { name: '1' },
                { name: '2' },
                { name: '3' },
            ]
        }
    }

    return (
        <Fragment>
            <button onClick={() => navigate('../')}>Go back</button>

            <h2>
                {categories[category].title}
            </h2>
        </Fragment>

    );
};

export default ExerciseSelection;