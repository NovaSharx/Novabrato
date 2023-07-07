import { ReactNode, createContext, useState } from "react";

interface IVirtualGuitar {
    highlightedNotes: string[],
    setHighlightedNotes: React.Dispatch<React.SetStateAction<string[]>>,

    scaleNotes: string[],
    root: string,
    mode: string,
    noteLabel: string,
    setNoteLabel: React.Dispatch<React.SetStateAction<string>>,

    playNote: (frequency: number) => Promise<void>,

    calculateScaleNotes: (newRoot: string, newMode: string) => void,
    getTriadNotes: (rootNote: string) => string[],

    noteLibrary: string[],
    baseFrequencyLibrary: number[],
    noteLabelLibrary: { [key: string]: string[] }
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

    const modeIntervalPatterns: { [key: string]: number[] } = {
        'ionian': [1, 1, 0, 1, 1, 1, 0],
        'aeolian': [1, 0, 1, 1, 0, 1, 1],
        'major-pentatonic': [1, 1, 2, 1, 2],
        'minor-pentatonic': [2, 1, 1, 2, 1]
    }

    const chordCycle: string[] = ['major', 'minor', 'minor', 'major', 'major', 'minor', 'minor dim']

    const noteLabelLibrary: { [key: string]: string[] } = {
        notes: scaleNotes,
        degrees: ['R', '2', '3', '4', '5', '6', '7'],
        intervals: ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7']
    }

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

    function getTriadNotes(rootNote: string) {
        let triadArray: string[] = []
        let rootNoteIndex: number = scaleNotes.indexOf(rootNote)

        for (let iteration: number = 0; iteration < scaleNotes.length; iteration++) {
            let index: number = (iteration + rootNoteIndex) % scaleNotes.length

            triadArray.push(scaleNotes[index])
            iteration++
        }

        triadArray.splice(-1) // Omitting seventh on purpose *TBA*

        return triadArray
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
        }, 1000);
    };

    return (
        <VirtualGuitarContext.Provider value={{
            highlightedNotes,
            setHighlightedNotes,
            scaleNotes,
            root,
            mode,
            noteLabel,
            setNoteLabel,
            playNote,
            calculateScaleNotes,
            getTriadNotes,
            noteLibrary,
            baseFrequencyLibrary,
            noteLabelLibrary
        }}>
            {children}
        </VirtualGuitarContext.Provider>
    );
};

export default VirtualGuitarProvider;