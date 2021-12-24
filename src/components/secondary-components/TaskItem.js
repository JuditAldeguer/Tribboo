import { useState } from "react";
//Styles
import "../../styles/components/taskItem.scss";

const TaskItem = (props) => {
  const [view, setView] = useState("");

  const handleClickTask = (ev) => {
    if (view !== "hidden") {
      const el = ev.target;
      const p = el.parentElement.id;
      console.log(p);
      setView("hidden");
      renderOptionInput(p);
    }
  };

  const renderOptionInput = (p) => {
    if (view === "hidden") {
      return (
        <form id={p}>
          <select
            onChange={updateStatus}
            defaultValue="choose"
            name="status"
            id="status"
          >
            <option disabled value="choose">
              Escoge...
            </option>
            <option value="TODO">A hacer</option>
            <option value="IN_PROGRESS">En proceso</option>
            <option value="DONE">O. Cumplido</option>
          </select>
        </form>
      );
    } if (view === "" || view === "done") {
      return <i className={`${view} fas fa-ellipsis-h`}></i>;
    }
   };
  
  const updateStatus = (ev) => {
    const s = ev.target;
    const p = s.closest("li").id;
    console.log(p, s.value);
    props.handleUpdatedData(p, s.value);
    setView("done");

  };
  
  return (
    <li
      key={props.task.idTask}
      id={props.task.idTask}
      className="list-group-item bg-light"
    >
      <h3 onClick={handleClickTask}>
        {props.task.taskName} {renderOptionInput()}
        
      </h3>
      <p>{props.task.description}</p>
      <button className={`fase fase--${props.task.phase}`}>
        FASE {props.task.phase}
      </button>
      <p className="date">
        {props.task.startAt} - {props.task.endAt}
      </p>
    </li>
  );
};

export default TaskItem;
