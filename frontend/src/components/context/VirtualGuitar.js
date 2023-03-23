import { createContext, useState } from "react";

export const VirtualGuitar = createContext()

function VirtualGuitarProvider({ children }) {

    const [selectedNotes, setSelectedNotes] = useState([])

    return (
        <VirtualGuitar.Provider value={{ selectedNotes, setSelectedNotes }}>
            {children}
        </VirtualGuitar.Provider>
    )
}

export default VirtualGuitarProvider