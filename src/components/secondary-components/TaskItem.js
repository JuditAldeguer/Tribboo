//Styles
import "../../styles/components/taskItem.scss";

const TaskItem = (props) => {
  const handleClickTask = (ev) => {
    console.log(ev, "cliked");
  };

  return (
    <>
      <h3
        onClick={(ev) => {
          debugger;
          console.log(ev, "cliked");
        }}
      >
        {props.task.taskName}
      </h3>{" "}
      <button>...</button> <i className="fas fa-ellipsis-h"></i>
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
