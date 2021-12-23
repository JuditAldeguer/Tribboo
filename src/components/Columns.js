import TaskItem from "./secondary-components/TaskItem";
//Styles
import "../styles/components/columns.scss";

const Columns = (props) => {
  //render
  const renderListtoDo = () => {
    return props.toDo.map((task) => {
      return (
        <li key={task.idTask} className="list-group-item">
          <TaskItem task={task} />
        </li>
      );
    });
  };

  const renderListInProcess = () => {
    return(
    props.inProcess.map((task) => {
      return (
        <li key={task.idTask} className="list-group-item">
          <TaskItem task={task} />
        </li>
      );
      })
    );
  };

  const renderListDone = () => {
    return (
      props.done.map((task) => {
        return (
          <li key={task.idTask} className="list-group-item">
            <TaskItem task={task} />
          </li>
        );
      })
    );
  };

  // //handle
  // const handleUpdateData = (ev) => {
  //   ev.preventDefault();
  //   const newData =  {
  //         idTask: "b5561ab5-0c28-4801-941e-4750df2cf2fc",
  //         taskName: "NEW",
  //         description: "New new new...",
  //         startAt: "01/12/2018",
  //         endAt: "02/12/2021",
  //         status: "TODO",
  //         phase: "1",
  //   }
  //   // props.handleData(newData);
  // };

  return (
    <main className="hstack gap-3 container">
      <div className="bg-light border vstack">
        <h2>
          A hacer{" "}
          <button
          // onClick={handleUpdateData}
          >
            <i className="fas fa-plus" />
          </button>
        </h2>
        <ul>{props.toDo.length >= 1 ? renderListtoDo() : ""}</ul>
      </div>
      <div className="bg-light border vstack">
        <h2>
          En proceso{" "}
          <button
          // onClick={handleUpdateData}
          >
            <i className="fas fa-plus" />
          </button>
        </h2>
        <ul>
          {props.inProcess.length >= 1 ? renderListInProcess() : ""}
        </ul>
      </div>
      <div className="bg-light border vstack">
        <h2>
          Objetivos cumplidos{" "}
          <button
          // onClick={handleUpdateData}
          >
            <i className="fas fa-plus" />
          </button>
        </h2>
        <ul>{props.done.length >= 1 ? renderListDone() : ""}</ul>
      </div>
    </main>
  );
};

export default Columns;
