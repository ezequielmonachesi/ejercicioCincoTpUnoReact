import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";
import { useEffect, useState } from "react";

const FormularioTarea = () => {
  let arraysTareas = JSON.parse(localStorage.getItem('array')) || [];
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState(arraysTareas);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea("");
  };
  const borrarTarea = (tarea) =>{
    let copiaTareas = tareas.filter((itemTarea)=>itemTarea !== tarea);
    setTareas(copiaTareas);
  }
  useEffect(()=>{
    localStorage.setItem('array', JSON.stringify(tareas));
  }, [tareas])
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea valor = {tareas} borrarTarea={borrarTarea}></ListaTarea>
    </>
  );
};

export default FormularioTarea;
