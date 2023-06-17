import { ReactNode, createContext, useState } from "react";

interface IVirtualGuitar {
    selectedNotes: string[],
    setSelectedNotes: React.Dispatch<React.SetStateAction<string[]>>,
    playNote: (frequency: number) => Promise<void>,
    noteLibrary: string[],
    baseFrequencyLibrary: number[]
};

export const VirtualGuitarContext = createContext<IVirtualGuitar | null>(null);

function VirtualGuitarProvider({ children }: { children: ReactNode }): JSX.Element {

    const [selectedNotes, setSelectedNotes] = useState<string[]>([])

    const noteLibrary: string[] = [
        'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'
    ];

    const baseFrequencyLibrary: number[] = [
        16.35, 17.32, 18.35, 19.45, 20.60, 21.83, 23.12, 24.50, 25.96, 27.50, 29.14, 30.87
    ];


    async function playNote(frequency: number): Promise<void> {
        const audioContext: AudioContext = new AudioContext();

        const oscillator: OscillatorNode = audioContext.createOscillator();
        const gain: GainNode = audioContext.createGain();

        oscillator.type = 'triangle';
        oscillator.frequency.value = frequency;
        oscillator.connect(gain);

        gain.gain.value = 1;
        gain.connect(audioContext.destination);
        gain.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 3);

        oscillator.start(0);

        setTimeout((): void => {
            audioContext.close();
        }, 2000);
    };

    return (
        <VirtualGuitarContext.Provider value={{
            selectedNotes,
            setSelectedNotes,
            playNote,
            noteLibrary,
            baseFrequencyLibrary
        }}>
            {children}
        </VirtualGuitarContext.Provider>
    );
};

export default VirtualGuitarProvider;