import { useState, useEffect } from "react";
//Styles
import { Form, Row, Col, Button } from "react-bootstrap";
import "../../styles/components/newTask.scss";

const NewTask = (props) => {
  const [validated, setValidated] = useState(false);
  const [newTask, SetNewTask] = useState({
    idTask: "",
    taskName: "",
    description: "",
    startAt: "",
    endAt: "",
    status: "",
    phase: "",
  });

  const handleCancel = () => {
    const updatedMore = "";
    props.updateMore(updatedMore);
  };

    const handleAdd = (e) => {
        debugger;
    const form = e.target.closest("form");
    if (
      form.checkValidity() === false ||
      newTask.status === "" ||
      newTask.status === "CHOOSE"
    ) {
      e.preventDefault();
      e.stopPropagation();

      setValidated(true);
    } else {
      debugger;
      console.log(newTask);
      console.log(newTask.idTask);
      props.handleAddToData(newTask);
      const updatedMore = "";
      props.updateMore(updatedMore);
    }
  };

  const handleChange = (e) => {
    debugger;
    console.log(e.target.value, e.target.id);
    const v = e.target.value;
    const i = e.target.id;
    console.log(i);
    SetNewTask({ ...newTask, [e.target.id]: v });
    // newTask.idTask = e.target.value;
  };
  const defaultStatus = () => {
    debugger;
    const s = props.actualStatus;
    let a = "CHOOSE";
    if (s === "A hacer") {
      a = "TODO";
      return a;
    }
    if (s === "En proceso") {
      a = "IN_PROGRESS";
      return a;
    }
    if (s === "Objetivos cumplidos") {
      a = "DONE";
      console.log(a);
      return a;
    }

    return a;
  };

  console.log("status: ", defaultStatus());

  return (
    <Form
      noValidate
      validated={validated}
      className="container bg-light newTask"
    >
      <Row className="mb-3">
        <Form.Group as={Col} controlId="idTask">
          <Form.Label>Identificador</Form.Label>
          <Form.Control
            required
            size="sm"
            type="text"
            placeholder="Ej: b5561ab5-0c28-4801-941e-4750df2cf2fc"
            value={newTask.idTask}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="taskName">
          <Form.Label>Nombre de la tarea</Form.Label>
          <Form.Control
            required
            size="sm"
            type="text"
            placeholder="Ej: Piscina"
            value={newTask.taskName}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          required
          size="sm"
          placeholder="Ej: Lorem ipsum dolor sit.."
          value={newTask.description}
          onChange={handleChange}
        />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3" controlId="startAt">
          <Form.Label>Fecha inicio</Form.Label>
          <Form.Control
            required
            type="date"
            size="sm"
            placeholder="Ej: 21/02/2018"
            value={newTask.startAt}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="endAt">
          <Form.Label>Fecha fin</Form.Label>
          <Form.Control
            required
            type="date"
            size="sm"
            placeholder="Ej: 21/10/2018"
            value={newTask.endAt}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="status">
          <Form.Label>Estado</Form.Label>
          <Form.Select
            required
            value={newTask.status}
            defaultValue={defaultStatus()}
            onChange={handleChange}
          >
            <option value={"CHOOSE"} disabled>Escoge el estado...</option>
            <option value={"TODO"}>A hacer</option>
            <option value={"IN_PROGRESS"}>En proceso</option>
            <option value={"DONE"}>Obj. Cumplido</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="phase">
          <Form.Label>Fase</Form.Label>
          <Form.Select
            required
            defaultValue="CHOOSE"
            value={newTask.phase}
            onChange={handleChange}
          >
            <option value={"CHOOSE"} disabled>Escoge la fase...</option>
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
          <Button variant="primary" onClick={handleAdd}>
            Añadir
          </Button>
        </Form.Group>
      </Row>
    </Form>
  );
};

export default NewTask;
