import { createContext, useContext, useEffect, useState } from "react";

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

    useEffect(() => {
        try {
            const savedDavsFaturadas = JSON.parse(localStorage.getItem('davsFaturadas'));
            const savedDavsCriadas = JSON.parse(localStorage.getItem('davsCriadas'));

            if (savedDavsFaturadas && savedDavsFaturadas.length > 0) {
                setDavsFaturadas(savedDavsFaturadas);
            }
            if (savedDavsCriadas && savedDavsCriadas.length > 0) {
                setDavsCriadas(savedDavsCriadas);
            }
        } catch (error) {
            console.error("Erro ao carregar dados do localStorage:", error);
        }
    }, []);

    // Salva davsFaturadas no localStorage sempre que mudar
    useEffect(() => {
        try {
            localStorage.setItem('davsFaturadas', JSON.stringify(davsFaturadas));
        } catch (error) {
            console.error("Erro ao salvar davsFaturadas no localStorage:", error);
        }
    }, [davsFaturadas]);

    // Salva davsCriadas no localStorage sempre que mudar
    useEffect(() => {
        try {
            localStorage.setItem('davsCriadas', JSON.stringify(davsCriadas));
        } catch (error) {
            console.error("Erro ao salvar davsCriadas no localStorage:", error);
        }
    }, [davsCriadas]);


    function deleteById(id, davType) {
        if (davType == 'dav-criada') {
            const filteredDavs = davsCriadas.filter((_, index) => {
                return index != id;
            });
            setDavsCriadas(filteredDavs);
        }
        if(davType == 'dav-faturada') {
            const filteredDavs = davsFaturadas.filter((_, index) => {
                return index != id;
            });
            setDavsFaturadas(filteredDavs);
        }
    }

    return (
        <DavContext.Provider value={{ davsFaturadas, setDavsFaturadas, davsCriadas, setDavsCriadas, davInput, setDavInput, davType, setDavType, deleteById }}>
            {children}
        </DavContext.Provider>
    )
}