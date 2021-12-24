import TaskItem from "./secondary-components/TaskItem";
import ModalWindow from "./secondary-components/ModalWindow";
import Input from "./secondary-components/Input";
import { useState } from "react";
//Styles
import "../styles/components/columns.scss";

const Columns = (props) => {
  const [more, setMore] = useState("");

  //render
  const renderListtoDo = () => {
    return props.toDo.map((task) => {
      return (
        <TaskItem
          data={props.data}
          handleUpdatedData={props.handleUpdatedData}
          task={task}
        />
      );
    });
  };

  const renderListInProcess = () => {
    return props.inProcess.map((task) => {
      return (
        <TaskItem
          data={props.data}
          handleUpdatedData={props.handleUpdatedData}
          task={task}
        />
      );
    });
  };

  const renderListDone = () => {
    return props.done.map((task) => {
      return (
        <TaskItem
          data={props.data}
          handleUpdatedData={props.handleUpdatedData}
          task={task}
        />
      );
    });
  };

  //  const handleChange = (searchWord) => {
  //   props.handleChange(searchWord);
  // };


  const renderMore = () => {
    debugger;
    if (more === "clicked") {
      return (
        <ModalWindow title="Introduce una nueva tarea">
          <form>
            <Input
              labelText="Identificador"
              inputValue={props.inputValue}
              // handleChange={handleChange}
              inputType="text"
            />
            <Input
              labelText="Nombre de la tarea"
              inputValue={props.inputValue}
              // handleChange={handleChange}
              inputType="text"
            />
            <Input
              labelText="Descripción"
              inputValue={props.inputValue}
              // handleChange={handleChange}
              inputType="text"
            />
            <Input
              labelText="Fecha inicio"
              inputValue={props.inputValue}
              // handleChange={handleChange}
              inputType="text"
            />
            <Input
              labelText="Fecha fin"
              inputValue={props.inputValue}
              // handleChange={handleChange}
              inputType="text"
            />
            <Input
              labelText="Estado"
              inputValue={props.inputValue}
              // handleChange={handleChange}
              inputType="text"
            />
            <Input
              labelText="Fase"
              inputValue={props.inputValue}
              // handleChange={handleChange}
              inputType="text"
            />
          </form>
        </ModalWindow>
      );
    }
    if (more === "" || more === "done") {
      return (
        <button
          className="list-btn"
          onClick={(ev) => {
            setMore("clicked");
            handleClickMore(ev);
          }}
        >
          <i className="fas fa-plus" />
        </button>
      );
    }
  };

  //  handle
  const handleClickMore = (ev) => {
    console.log(more);
    debugger;
    if (more === "clicked") {
      const el = ev.target;
      const p = el.parentElement.id;
      console.log(p);
      setMore("");
      renderMore(p);
    }
    props.handleUpdatedData();
    // props.handleUpdatedData(id, newValue);
  };

  return (
    <main className="hstack gap-3 container">
      <div className="border vstack column">
        <h2 className="column__title">A hacer {renderMore()}</h2>
        <ul>
          {!Array.isArray(props.toDo) || !props.toDo.length
            ? ""
            : renderListtoDo()}
        </ul>
      </div>
      <div className="border vstack column">
        <h2 className="column__title">En proceso {renderMore()}</h2>
        <ul>
          {!Array.isArray(props.inProcess) || !props.inProcess.length
            ? ""
            : renderListInProcess()}
        </ul>
      </div>
      <div className="border vstack column">
        <h2 className="column__title">Objetivos cumplidos {renderMore()}</h2>
        <ul>
          {!Array.isArray(props.done) || !props.done.length
            ? ""
            : renderListDone()}
        </ul>
      </div>
    </main>
  );
};

export default Columns;
