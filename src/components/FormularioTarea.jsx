import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";
import { useEffect, useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    localStorage.setItem('array', JSON.stringify([...tareas, tarea]));
    setTarea("");
  };
  useEffect(()=>{
    const datoLocalStorage = localStorage.getItem('array');
    if(datoLocalStorage){
      setTareas(JSON.parse(datoLocalStorage));
    }
  }, [])
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
      <ListaTarea valor = {tareas}></ListaTarea>
    </>
  );
};

export default FormularioTarea;
