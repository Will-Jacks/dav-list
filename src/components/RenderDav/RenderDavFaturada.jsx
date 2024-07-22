import { useDavContext } from "../../context/DavContext.jsx";

export default function RenderDavFaturada() {

    const { davsFaturadas } = useDavContext();

    return (
        <div>
            <h2 className="main-title">Dav faturada</h2>
            {davsFaturadas.map((item, key) => {
                return (
                    <div key={key}>
                        <h3>{item.davInput}</h3>
                    </div>
                )
            })}
        </div>
    )
}