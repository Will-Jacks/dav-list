import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDavContext } from "../../context/DavContext";
import "./davCriada.css";
import { useEffect, useState } from "react";
export default function RenderDavCriada() {
  const { davsCriadas, deleteById, changeDavType } = useDavContext();

  const [horaCriada, setHoraCriada] = useState([]);

  // Atualiza o estado da hora para cada item em davsCriadas
  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const formattedHour = `${currentHour
      .toString()
      .padStart(2, "0")}:${currentMinutes.toString().padStart(2, "0")}`;

    // Cria um array de horários com o mesmo tamanho de davsCriadas
    setHoraCriada([...horaCriada, formattedHour]);
  }, [davsCriadas]);

  return (
    <div>
      <h2 className="main-title">Dav lançada</h2>
      {davsCriadas.map((item, key) => {
        return (
          <div key={key} className="render-dav-container">
            <h3>{item.davInput}</h3>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => deleteById(key, item.davType)}
              className="trash-icon"
            />
            <div className="check-icon-wrapper">
              <FontAwesomeIcon
                icon={faCheck}
                className="check-icon"
                onClick={() => changeDavType(key)}
              />
            </div>
            <p>{horaCriada[key]}</p>
          </div>
        );
      })}
    </div>
  );
}
