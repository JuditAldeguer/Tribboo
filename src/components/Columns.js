import TaskItem from "./secondary-components/TaskItem";
import ModalWindow from "./secondary-components/ModalWindow";
import InputOption from "./secondary-components/InputOption";
import Input from "./secondary-components/Input";
import { useState, useEffect } from "react";
//Styles
import "../styles/components/columns.scss";

const Columns = (props) => {
  const [more, setMore] = useState("");
  const [p, setP] = useState("");

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

  const renderMoree = () => {
    debugger;
    console.log(p);
    return (
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
          {/* <InputOption
              p={p}
              defaultValue={"Escoge el estado..."}
              firtsValue={"TODO"}
              secondValue={"IN_PROGRESS"}
              thirdValue={"DONE"}
              firtsText={"A hacer"}
              secondText={"En proceso"}
              thirdText={"Obj. Cumplido"}
              updateStatus={updateStatus}
            />
            <InputOption
              p={p}
              defaultValue={"Escoge la fase..."}
              firtsValue={"1"}
              secondValue={"2"}
              thirdValue={"3"}
              firtsText={"1"}
              secondText={"2"}
              thirdText={"3"}
              updateStatus={updateStatus} 
             /> */}
        </form>
    );
  };

  // useEffect
  useEffect(() => {
    renderMoree();
  }, [more]);

  const renderMore = () => {
    debugger;
    console.log(more, p);
    if (more === "clicked") {
      debugger;
      console.log(p);
      return <p>Hola {p}</p>;
    }
  };

  //  handle
  const handleClickMore = (ev) => {
    setMore("clicked");
    const el = ev.target;
    const p = el.closest("h2").textContent;
    setP(p);
  };

  // const updateClick = () => {
  //   if (more === "clicked") {
  //     const el = ev.target;
  //     const p = el.parentElement.id;
  //     console.log(p);
  //     setMore("");
  //     renderMore(p);
  //  props.handleUpdatedData(id, newValue);
  //   }
  // };

  return (
    <>
      {renderMoree()}
      <main className="hstack gap-3 container">
        <div className="border vstack column">
          <h2 className="column__title">
            A hacer
            <button className="list-btn" onClick={handleClickMore}>
              <i className="fas fa-plus" />
            </button>
          </h2>
          <ul>
            {!Array.isArray(props.toDo) || !props.toDo.length
              ? ""
              : renderListtoDo()}
          </ul>
        </div>
        <div className="border vstack column">
          <h2 className="column__title">
            En proceso{" "}
            <button className="list-btn" onClick={handleClickMore}>
              <i className="fas fa-plus" />
            </button>
          </h2>
          <ul>
            {!Array.isArray(props.inProcess) || !props.inProcess.length
              ? ""
              : renderListInProcess()}
          </ul>
        </div>
        <div className="border vstack column">
          <h2 className="column__title">
            Objetivos cumplidos{" "}
            <button className="list-btn" onClick={handleClickMore}>
              <i className="fas fa-plus" />
            </button>
          </h2>
          <ul>
            {!Array.isArray(props.done) || !props.done.length
              ? ""
              : renderListDone()}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Columns;
