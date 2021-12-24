//Styles
import { Form, Row, Col, Button } from "react-bootstrap";
import "../../styles/components/newTask.scss";

const NewTask = (props) => {
    const handleCancel = () => {
        const updatedMore = "";
        props.updateMore(updatedMore);
     };

    return (
      <Form className="container bg-light newTask">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridId">
            <Form.Label>Identificador</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Ej: b5561ab5-0c28-4801-941e-4750df2cf2fc"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTask">
            <Form.Label>Nombre de la tarea</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Ej: Piscina" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control size="sm" placeholder="Ej: Lorem ipsum dolor sit.." />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formGridsStartAt">
            <Form.Label>Fecha inicio</Form.Label>
            <Form.Control size="sm" placeholder="Ej: 21/02/2018" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEndAt">
            <Form.Label>Fecha fin</Form.Label>
            <Form.Control size="sm" placeholder="Ej: 21/10/2018" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Estado</Form.Label>
            <Form.Select defaultValue="Escoge el estado...">
              <option disabled>Escoge el estado...</option>
              <option value={"TODO"}>A hacer</option>
              <option value={"IN_PROGRESS"}>En proceso</option>
              <option value={"DONE"}>Obj. Cumplido</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Fase</Form.Label>
            <Form.Select defaultValue="Escoge la fase...">
              <option disabled>Escoge la fase...</option>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Button variant="dark" onClick={handleCancel}>
              Cancelar
            </Button>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Button variant="primary" >
              Añadir
            </Button>
          </Form.Group>
        </Row>
      </Form>
    );
};

export default NewTask;

