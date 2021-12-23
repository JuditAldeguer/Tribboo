//Styles
import "../../styles/components/taskItem.scss";

const TaskItem = (task) => {
  return (
    <>
      <h3>{task[0].taskName}</h3> <i className="fas fa-ellipsis-h"></i>
      <p>{task[0].description}</p>
      <button className={`fase fase--${task[0].phase}`}>FASE {task[0].phase}</button>
      <p className="date">
        {task[0].startAt} - {task[0].endAt}
      </p>
    </>
  );
};

export default TaskItem;
