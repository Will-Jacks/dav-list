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
    const [davsFaturadas, setDavsFaturadas] = useState([]);
    const [davsCriadas, setDavsCriadas] = useState([]);
    const [davInput, setDavInput] = useState('');
    const [davType, setDavType] = useState('dav-criada');

    return (
        <DavContext.Provider value={{ davsFaturadas, setDavsFaturadas, davsCriadas, setDavsCriadas, davInput, setDavInput, davType, setDavType }}>
            {children}
        </DavContext.Provider>
    )
}