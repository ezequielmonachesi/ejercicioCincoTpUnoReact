import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";


const ListaTarea = ({valor}) => {
  return (
    <ListGroup>
      {valor.map(e=>{
        return <ItemTarea item = {e}></ItemTarea>
      })}
    </ListGroup>
  );
};

export default ListaTarea;
