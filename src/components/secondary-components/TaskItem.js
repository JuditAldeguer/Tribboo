//Styles
import "../../styles/components/taskItem.scss";

const TaskItem = (props) => {
  return (
    <>
      <h3>{props.task.taskName}</h3> <i className="fas fa-ellipsis-h"></i>
      <p>{props.task.description}</p>
      <button className={`fase fase--${props.task.phase}`}>
        FASE {props.task.phase}
      </button>
      <p className="date">
        {props.task.startAt} - {props.task.endAt}
      </p>
    </>
  );
};

export default TaskItem;
