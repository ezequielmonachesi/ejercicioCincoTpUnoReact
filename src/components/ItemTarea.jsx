import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({item, borrarTarea}) => {
  return (
      <ListGroup.Item className="d-flex justify-content-between">
        {item}
        <Button variant="danger" onClick={()=>borrarTarea(item)}>Borrar</Button>
      </ListGroup.Item>
  );
};

export default ItemTarea;