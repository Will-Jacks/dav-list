import { useDavContext } from "../../context/DavContext";

export default function DavCounter() {

    const { davsFaturadas, davsCriadas } = useDavContext();

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '30px'
            }}>
            <h3>Davs faturadas: {davsFaturadas.length}</h3>
            <h3>Davs lançadas: {davsCriadas.length}</h3>
        </div>
    )
}