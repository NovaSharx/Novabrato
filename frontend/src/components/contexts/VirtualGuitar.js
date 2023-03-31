import { createContext, useState } from "react";

export const VirtualGuitar = createContext()

function VirtualGuitarProvider({ children }) {

    const [selectedNotes, setSelectedNotes] = useState([])

    const noteLibrary = [
        'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'
    ]

    const baseFrequencyLibrary = [
        16.35, 17.32, 18.35, 19.45, 20.60, 21.83, 23.12, 24.50, 25.96, 27.50, 29.14, 30.87
    ]


    async function playNote(frequency) {
        const audioContext = new AudioContext()

        const oscillator = audioContext.createOscillator()
        const gain = audioContext.createGain()

        oscillator.type = 'triangle'
        oscillator.frequency.value = frequency
        oscillator.connect(gain)

        gain.gain.value = 1
        gain.connect(audioContext.destination)
        gain.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 3)

        oscillator.start(0)

        setTimeout(() => {
            audioContext.close()
        }, 2000)
    }

    return (
        <VirtualGuitar.Provider value={{
            selectedNotes,
            setSelectedNotes,
            playNote,
            noteLibrary,
            baseFrequencyLibrary
        }}>
            {children}
        </VirtualGuitar.Provider>
    )
}

export default VirtualGuitarProvider