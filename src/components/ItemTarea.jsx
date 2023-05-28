import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({item}) => {
  return (
      <ListGroup.Item className="d-flex justify-content-between">
        {item}
        <Button variant="danger">Borrar</Button>
      </ListGroup.Item>
  );
};

export default ItemTarea;