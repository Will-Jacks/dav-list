import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDavContext } from "../../context/DavContext"
import './davCriada.css';
export default function RenderDavCriada() {

    const { davsCriadas, deleteById, changeDavType } = useDavContext();

    return (
        <div>
            <h2 className="main-title">Dav lançada</h2>
            {davsCriadas.map((item, key) => {
                return (
                    <div key={key} className="render-dav-container">
                        <h3>{item.davInput}</h3>
                        <FontAwesomeIcon icon={faTrash} onClick={() => deleteById(key, item.davType)} className="trash-icon"/>
                        <div className="check-icon-wrapper">
                            <FontAwesomeIcon icon={faCheck} className="check-icon" onClick={()=> changeDavType(key)}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}