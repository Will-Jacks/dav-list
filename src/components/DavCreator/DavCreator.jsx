import { Dav, useDavContext } from "../../context/DavContext.jsx";
import './davCreator.css';
export default function DavCreator() {

    const { davType, setDavType, davInput, setDavInput, davsFaturadas, setDavsFaturadas, davsCriadas, setDavsCriadas } = useDavContext();

    function handleSubmit(e) {
        e.preventDefault();
        if (davInput) {
            if (davType == 'dav-faturada') {
                const newDav = new Dav(davType, davInput);
                setDavsFaturadas([...davsFaturadas, newDav]);
                setDavInput('');
            }
            if (davType == 'dav-criada') {
                const newDav = new Dav(davType, davInput);
                setDavsCriadas([...davsCriadas, newDav]);
                setDavInput('');
            }
        } else {
            alert('Preencha o campo da DAV');
        }
    }


    function clearLocalStorage() {
        if (confirm('Você tem certeza que deseja apagar TUDO?')) {
            localStorage.clear();
            window.location.reload();
        }

    }

    return (
        <div className="dav-form-container">
            <form onSubmit={handleSubmit} className="form-wrapper">
                <label htmlFor="" className="main-title">DAV</label>
                <input type="text" onChange={(e) => setDavInput(e.target.value)} value={davInput} className="dav-input" />
                <select value={davType} onChange={(e) => setDavType(e.target.value)} className="dav-type-select">
                    <option value="dav-criada">Dav lançada</option>
                    <option value="dav-faturada">Dav faturada</option>
                </select>
                <button type="submit" className="btn-submit">Confirmar</button>
            </form>
            <button onClick={() => clearLocalStorage()}>Limpar tudo</button>
        </div>
    )
}