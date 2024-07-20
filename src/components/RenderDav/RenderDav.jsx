import { useDavContext } from "../../context/DavContext"

export default function RenderDav() {

    const { davs } = useDavContext();

    return (
        <>
            {davs.map((item, key) => {
                return (
                    <div key={key}>
                        <h3>{item.davInput}</h3>
                        <p>{item.davType}</p>
                    </div>
                )
            })}
        </>
    )
}