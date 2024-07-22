import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDavContext } from "../../context/DavContext"

export default function RenderDavCriada() {

    const { davsCriadas, deleteById } = useDavContext();

    return (
        <div>
            <h2 className="main-title">Dav lançada</h2>
            {davsCriadas.map((item, key) => {
                return (
                    <div key={key} className="render-dav-container">
                        <h3>{item.davInput}</h3>
                        <FontAwesomeIcon icon={faTrash} onClick={() => deleteById(key, item.davType)} />
                    </div>
                )
            })}
        </div>
    )
}