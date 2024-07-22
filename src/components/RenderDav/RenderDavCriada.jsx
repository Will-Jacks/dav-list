import { useDavContext } from "../../context/DavContext"
import './davCriada.css';
export default function RenderDavCriada() {

    const { davsCriadas } = useDavContext();

    return(
        <div>
            <h2 className="main-title">Dav lançada</h2>
            {davsCriadas.map((item, key) => {
                return(
                    <div key={key}>
                        <h3>{item.davInput}</h3>
                    </div>
                )
            })}
        </div>
    )
}