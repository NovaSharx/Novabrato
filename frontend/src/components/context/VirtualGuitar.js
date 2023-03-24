import { createContext, useState } from "react";

export const VirtualGuitar = createContext()

function VirtualGuitarProvider({ children }) {

    const [selectedNotes, setSelectedNotes] = useState([])


    function playNote(frequency) {

        const audioContext = new AudioContext()

        setTimeout(function () {
            const oscillator = audioContext.createOscillator()
            const gain = audioContext.createGain()

            oscillator.type = 'triangle'
            oscillator.frequency.value = frequency
            oscillator.connect(gain)

            gain.gain.value = 1
            gain.connect(audioContext.destination)
            gain.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 3)

            oscillator.start(0)
        }, 0)
    }

    return (
        <VirtualGuitar.Provider value={{ selectedNotes, setSelectedNotes, playNote }}>
            {children}
        </VirtualGuitar.Provider>
    )
}

export default VirtualGuitarProvider