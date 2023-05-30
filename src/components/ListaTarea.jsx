import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";


const ListaTarea = ({valor, borrarTarea}) => {
    // valor sería el array de Tareas
    // item es el prop de ItemTarea (creo que así se dice)
  return (
    <ListGroup>
      {valor.map((e,i)=>{
        return <ItemTarea key={i} item = {e} borrarTarea={borrarTarea}></ItemTarea>
      })}
    </ListGroup>
  );
};
export default ListaTarea;
