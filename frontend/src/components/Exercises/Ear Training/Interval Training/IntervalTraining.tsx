import { FC, Fragment, ReactElement, useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';

const IntervalTraining: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    return (
        <Fragment>

            <h2 className='page-title' style={{ borderBottom: `2px solid ${theme.palette.divider.tertiary}` }}>
                <a href="/exercises">EXERCISE</a><a href="/exercises/ear-training" style={{ fontSize: '0.8em' }}> / Ear Training</a><a href="interval-training" style={{ fontSize: '0.6em' }}> / Interval Training</a>
            </h2>

            <div id='exercise-content'>

            </div>

        </Fragment>

    );
};

export default IntervalTraining;