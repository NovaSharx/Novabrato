import { ReactNode, createContext, useState } from "react";

interface IVirtualGuitar {
    highlightedNotes: string[],
    setHighlightedNotes: React.Dispatch<React.SetStateAction<string[]>>,

    scaleNotes: string[],
    root: string,
    mode: string,
    noteLabel: string,

    playNote: (frequency: number) => Promise<void>,

    calculateScaleNotes: (newRoot: string, newMode: string) => void,

    noteLibrary: string[],
    baseFrequencyLibrary: number[]
};

export const VirtualGuitarContext = createContext<IVirtualGuitar | null>(null);

function VirtualGuitarProvider({ children }: { children: ReactNode }): JSX.Element {

    const [highlightedNotes, setHighlightedNotes] = useState<string[]>([])
    const [scaleNotes, setScaleNotes] = useState<string[]>([])

    const [root, setRoot] = useState<string>('');
    const [mode, setMode] = useState<string>('');
    const [noteLabel, setNoteLabel] = useState<string>('notes');

    const noteLibrary: string[] = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];

    const baseFrequencyLibrary: number[] = [16.35, 17.32, 18.35, 19.45, 20.60, 21.83, 23.12, 24.50, 25.96, 27.50, 29.14, 30.87];

    const modeIntervalPatterns: { [key: string]: number[] | undefined } = {
        'ionian': [1, 1, 0, 1, 1, 1, 0],
        'aeolian': [1, 0, 1, 1, 0, 1, 1],
        'major-pentatonic': [1, 1, 2, 1, 2],
        'minor-pentatonic': [2, 1, 1, 2, 1]
    }

    const chordCycle = ['major', 'minor', 'minor', 'major', 'major', 'minor', 'minor dim']

    function calculateScaleNotes(newRoot: string, newMode: string): void {
        let newScale: string[] = [];

        if (newRoot !== '' && newMode !== '') {
            let noteIndex: number = noteLibrary.indexOf(newRoot);
            let modeIndex: number = 0;

            for (let iteration: number = 0; iteration < noteLibrary.length; iteration++, modeIndex++) {
                let index: number = (iteration + noteIndex) % noteLibrary.length

                newScale.push(noteLibrary[index])

                iteration += modeIntervalPatterns[newMode]![modeIndex]
            }

            setHighlightedNotes([])
        }

        setScaleNotes(newScale)
        setRoot(newRoot)
        setMode(newMode)
    }

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
        }, 5000);
    };

    return (
        <VirtualGuitarContext.Provider value={{
            highlightedNotes,
            setHighlightedNotes,
            scaleNotes,
            root,
            mode,
            noteLabel,
            playNote,
            calculateScaleNotes,
            noteLibrary,
            baseFrequencyLibrary
        }}>
            {children}
        </VirtualGuitarContext.Provider>
    );
};

export default VirtualGuitarProvider;