import { Dav, useDavContext } from "../../context/DavContext.jsx";

export default function DavCreator() {

    const { davType, setDavType, davInput, setDavInput, davsFaturadas, setDavsFaturadas, davsCriadas, setDavsCriadas} = useDavContext();

    function handleSubmit(e) {
        e.preventDefault();
        if(davInput) {
            if(davType == 'dav-faturada') {
                const newDav = new Dav(davType, davInput);
                setDavsFaturadas([...davsFaturadas, newDav]);
                setDavInput('');
            }
            if(davType == 'dav-criada') {
                const newDav = new Dav(davType, davInput);
                setDavsCriadas([...davsCriadas, newDav]);
                setDavInput('');
            }
        }else {
            alert('Preencha o campo da DAV');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">DAV </label>
                <input type="text" onChange={(e) => setDavInput(e.target.value)} value={davInput} />
                <select value={davType} onChange={(e) => setDavType(e.target.value)}>
                    <option value="dav-criada">Dav lançada</option>
                    <option value="dav-faturada">Dav faturada</option>
                </select>
                <button type="submit">Finalizar</button>
            </form>
        </>
    )
}