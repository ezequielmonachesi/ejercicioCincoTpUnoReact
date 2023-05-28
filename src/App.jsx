import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import FormularioTarea from './components/FormularioTarea';

function App() {
  return (
    <>
    <Container className='main my-5'>
      <section className='text-light'>
      <h1>Lista Tareas</h1>
      <hr />
      </section>
      <FormularioTarea></FormularioTarea>
    </Container>
    <footer className='bg-dark py-5 text-light text-center'>
    <p>&copy; Todos los derechos reservados.</p>
    </footer>
    </>
  )
}

export default App
