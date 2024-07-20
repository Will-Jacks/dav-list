import { createContext, useContext, useState} from "react";

const DavContext = createContext();

export function useDavContext() {
    return useContext(DavContext);
}

export class Dav {
    constructor(davType, davInput) {
        this.davType = davType;
        this.davInput = davInput;
    }
}

// eslint-disable-next-line react/prop-types
export function DavProvider({ children }) {
    const [davs, setDavs] = useState([]);
    const [davInput, setDavInput] = useState('');
    const [davType, setDavType] = useState('dav-criada');

    return (
        <DavContext.Provider value={{ davs, setDavs, davInput, setDavInput, davType, setDavType }}>
            {children}
        </DavContext.Provider>
    )
}