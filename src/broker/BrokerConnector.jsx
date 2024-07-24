import mqtt from "mqtt";

export default function BrokerConnector() {

    const broker = "broker.emqx.io";
    const port = "8084";

    mqtt.connect(`wss://${broker}/${port}/mqtt`)

    return(
        <>
        </>
    )
}