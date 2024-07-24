import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDavContext } from "../../context/DavContext.jsx";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './davCriada.css';
export default function RenderDavFaturada() {

    const { davsFaturadas, deleteById } = useDavContext();

    return (
        <div>
            <h2 className="main-title">Dav faturada</h2>
            {davsFaturadas.map((item, key) => {
                return (
                    <div key={key} className="render-dav-container">
                        <h3>{item.davInput}</h3>
                        <FontAwesomeIcon icon={faTrash} onClick={() => deleteById(key, item.davType)} className="trash-icon"/>
                    </div>
                )
            })}
            
        </div>
    )
}