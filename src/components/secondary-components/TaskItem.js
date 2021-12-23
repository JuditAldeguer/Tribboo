//Styles
import "../../styles/components/taskItem.scss";

const TaskItem = (props) => {
  const handleClickTask = (ev) => {
    const el = ev.target;
    const p = el.parentElement;
    console.log(p.id);
  };

  return (
    <li
      key={props.task.idTask}
      id={props.task.idTask}
       className="list-group-item bg-light"
    >
      <h3 onClick={handleClickTask}>
        {props.task.taskName}
        <i className="fas fa-ellipsis-h"></i>{" "}
      </h3>{" "}
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
