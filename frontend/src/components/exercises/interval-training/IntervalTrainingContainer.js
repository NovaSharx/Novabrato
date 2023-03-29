import styled from '@emotion/styled';
import * as Mui from '@mui/material';
import { borderColor } from '@mui/system';
import { Fragment, useContext, useEffect, useState } from 'react';
import { VirtualGuitar } from '../../contexts/VirtualGuitar';

export default function IntervalTrainingContainer() {

    const { noteLibrary, playNote } = useContext(VirtualGuitar)

    const noteFrequencies = [131, 140, 147, 156, 165, 175, 185, 196, 208, 220, 233, 247]

    const [currentIndex, setCurrentIndex] = useState(null)
    const [intervalIndices, setIntervalIndices] = useState({
        firstNoteIndex: 0,
        secondNoteIndex: 0
    })
    const [exerciseResults, setExerciseResults] = useState([])

    function handleNewSession() {
        setExerciseResults([])
        generateRandomInterval()
        setCurrentIndex(1)
    }

    function startNewQuestion(response) {
        setExerciseResults([
            ...exerciseResults,
            noteLibrary[intervalIndices.secondNoteIndex] === response
        ])
        generateRandomInterval()
        setCurrentIndex(currentIndex + 1)
    }

    function generateRandomInterval() {
        setIntervalIndices({
            firstNoteIndex: Math.floor(Math.random() * noteFrequencies.length),
            secondNoteIndex: Math.floor(Math.random() * noteFrequencies.length)
        })
    }

    function playInterval() {
        playNote(noteFrequencies[intervalIndices.firstNoteIndex])
        setTimeout(() => {
            playNote(noteFrequencies[intervalIndices.secondNoteIndex])
        }, 2000)
    }

    const renderIntervalPrompt = () => {
        if (currentIndex > 5) {

            let score = 0

            for (let i = 0; i < exerciseResults.length; i++) {
                if (exerciseResults[i]) {
                    score++
                }
            }

            return (
                <Fragment>
                    <Mui.Typography variant='h3'>Here are your results!</Mui.Typography>

                    <Mui.Box onClick={playInterval} sx={{
                        p: 2,
                        color: '#3EC199',
                        border: '2px solid #3EC199',
                        borderRadius: 5
                    }}>
                        <Mui.Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '5em', color: 'white' }}>
                            {score} / 5
                        </Mui.Typography>

                        <Mui.Button variant='contained' onClick={() => { }}>Submit Result</Mui.Button>
                    </Mui.Box>
                </Fragment>
            )
        } else if (currentIndex) {
            return (
                <Fragment>

                    <Mui.Typography variant='h3'>Interval Prompt #{currentIndex}</Mui.Typography>

                    <Mui.Box onClick={playInterval} sx={{
                        m: 3,
                        color: '#3EC199',
                        border: '2px solid #3EC199',
                        borderRadius: 5,
                        '&:hover': {
                            cursor: 'pointer',
                            borderColor: '#3EA7C1',
                            color: '#3EA7C1'
                        }
                    }}>
                        <Mui.Typography>CLICK TO PLAY INTERVAL</Mui.Typography>
                        <Mui.Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '5em', color: 'white' }}>
                            {noteLibrary[intervalIndices.firstNoteIndex]}
                        </Mui.Typography>
                    </Mui.Box>

                    <Mui.Typography>Select the second note played.</Mui.Typography>

                    <Mui.Stack direction='row' spacing={2} justifyContent='center'>
                        {renderNoteButtons}
                    </Mui.Stack>
                </Fragment>
            )
        }
    }

    const renderNoteButtons = noteLibrary.map((note, index) => {
        return (
            <Mui.Box key={index} sx={{
                width: '50px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Mui.Box key={index} onClick={(e) => startNewQuestion(e.target.innerHTML)} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontFamily: 'Inter',
                    fontSize: note.length < 2 ? '1.2em' : '0.8em',
                    width: '40px',
                    height: '40px',
                    borderRadius: '40px',
                    border: 'solid 1px #3EC199',
                    backgroundColor: 'black',
                    transition: '0.1s',
                    '&:hover': {
                        cursor: 'pointer',
                        color: 'white',
                        fontSize: '1.5em',
                        border: 'solid 5px #3EA7C1'
                    }
                }}>
                    {note}
                </Mui.Box>
            </Mui.Box>
        )
    })

    return (
        <Mui.Container maxWidth='lg' sx={{
            p: 5
        }}>

            <Mui.Box sx={{
                p: 2,
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                background: 'rgba(0,0,0,0.9)',
                backdropFilter: 'blur(5px)'
            }}>

                <Mui.Typography variant='h3' sx={{
                    p: 5,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    background: 'linear-gradient(0deg, rgba(62, 193, 153, 1) 50%, rgba(62, 167, 193, 1) 60%)',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>
                    Interval Training Exercise
                </Mui.Typography>

                <Mui.Box sx={{
                    p: 2,
                    border: '1px solid #3EC199',
                    borderRadius: 5
                }}>

                    <Mui.Button variant='outlined' sx={{ m: 1 }} onClick={handleNewSession}>
                        Start New Session
                    </Mui.Button>

                    {renderIntervalPrompt()}

                </Mui.Box>

            </Mui.Box>

        </Mui.Container>
    )
}