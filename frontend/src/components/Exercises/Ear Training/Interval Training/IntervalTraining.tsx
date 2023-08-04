import { FC, Fragment, ReactElement, useContext, useState } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import styled from '@emotion/styled';

const IntervalTraining: FC = (): ReactElement => {

    const { theme } = useContext(ThemeContext)!

    const [intervalRange, setIntervalRange] = useState<number>(3);

    function changeIntervalRange(amount: number): void {
        let updatedIntervalRange: number = intervalRange + amount;

        if (updatedIntervalRange < 1 || updatedIntervalRange > 12) {
            return;
        } else {
            setIntervalRange(updatedIntervalRange);
        }
    }

    const IntervalRangeControlButton = styled.span`
        color: inherit;
        background-color: transparent;

        &:hover {
            color: ${theme.palette.primary.main};
            background-color: ${theme.palette.background.primary};
        }

    `

    const StartButton = styled.span`
        border-color: transparent;
        background-color: ${theme.palette.background.full};

        &:hover {
            border-color: ${theme.palette.primary.main};
            background-color: ${theme.palette.background.secondary};
        }
    `

    return (
        <Fragment>

            <h2 className='page-title' style={{ borderBottom: `2px solid ${theme.palette.divider.tertiary}` }}>
                <a href="/exercises">EXERCISE</a><a href="/exercises/ear-training" style={{ fontSize: '0.8em' }}> / Ear Training</a><a href="interval-training" style={{ fontSize: '0.6em' }}> / Interval Training</a>
            </h2>

            <div id='exercise-content'>

                <p id='exercise-content-prompt' style={{ color: theme.palette.text.secondary }}>Please select an interval range.</p>

                <div id='interval-range-selection-window'>

                    <div id='interval-range-controls'>
                        <IntervalRangeControlButton className='interval-range-control-button' style={{ color: intervalRange <= 1 ? theme.palette.text.disabled : '' }} onClick={() => changeIntervalRange(-1)}>-</IntervalRangeControlButton>
                        <span id='interval-range-display' key={intervalRange}>{intervalRange}</span>
                        <IntervalRangeControlButton className='interval-range-control-button' style={{ color: intervalRange >= 12 ? theme.palette.text.disabled : '' }} onClick={() => changeIntervalRange(1)}>+</IntervalRangeControlButton>
                    </div>

                    <span id='interval-range-unit'>Half Step(s)</span>

                    <StartButton id='interval-range-start-button' onClick={() => {}}>START</StartButton>
                </div>
            </div>

        </Fragment>

    );
};

export default IntervalTraining;