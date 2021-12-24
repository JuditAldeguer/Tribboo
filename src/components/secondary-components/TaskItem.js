import { useState } from "react";
//Styles
import "../../styles/components/taskItem.scss";

const TaskItem = (props) => {
  const [view, setView] = useState("");

  const handleClickTask = (ev) => {
    const el = ev.target;
    const p = el.parentElement;
    console.log(p.id);
    setView("hidden");
    debugger;
    renderOptionInput();
  };

  const renderOptionInput = () => {
    if (view === "hidden") {
      return (
        <form>
          <select name="status" id="status">
            <option disabled selected>
              Escoge...
            </option>
            <option value="IN_PROGRESS">En proceso</option>
            <option value="TODO">A hacer</option>
            <option value="DONE">O. Cumplido</option>
          </select>
        </form>
      );
    }
    return <i className={`${view} fas fa-ellipsis-h`}></i>;
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
