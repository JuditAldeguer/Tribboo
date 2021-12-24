import TaskItem from "./secondary-components/TaskItem";
import { useState, useEffect } from "react";
//Styles
import "../styles/components/columns.scss";
import NewTask from "./secondary-components/NewTask";

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

  const renderMore = () => {
    debugger;
    console.log(p);
    if (more === "clicked") {
      return (
        <NewTask handleAddToData={props.handleAddToData} updateMore={updateMore} />
      );
    }
  };

  const updateMore = (updated) => {
    debugger;
    setMore(updated);
  };

  // useEffect
  useEffect(() => {
    renderMore();
  }, [more]);

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
      {renderMore()}
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
