import TaskItem from "./secondary-components/TaskItem";
//Styles
import "../styles/components/columns.scss";

const Columns = (props) => {
  //render
  const renderListtoDo = () => {
    return props.toDo.map((task) => {
      return <TaskItem data={props.data} handleUpdatedData={props.handleUpdatedData} task={task} />;
    });
  };

  const renderListInProcess = () => {
    return props.inProcess.map((task) => {
      return <TaskItem data={props.data} handleUpdatedData={props.handleUpdatedData} task={task} />;
    });
  };

  const renderListDone = () => {
    return props.done.map((task) => {
      return <TaskItem data={props.data} handleUpdatedData={props.handleUpdatedData} task={task} />;
    });
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
      <div className="border vstack column">
        <h2 className="column__title">
          A hacer{" "}
          <button
            className="list-btn"
            // onClick={props.handleUpdatedData}
          >
            <i className="fas fa-plus" />
          </button>
        </h2>
        <ul>{props.toDo.length >= 1 ? renderListtoDo() : ""}</ul>
      </div>
      <div className="border vstack column">
        <h2 className="column__title">
          En proceso{" "}
          <button
            className="list-btn"
            // onClick={props.handleUpdatedData}
          >
            <i className="fas fa-plus" />
          </button>
        </h2>
        <ul>{props.inProcess.length >= 1 ? renderListInProcess() : ""}</ul>
      </div>
      <div className="border vstack column">
        <h2 className="column__title">
          Objetivos cumplidos{" "}
          <button
            className="list-btn"
            // onClick={props.handleUpdatedData}
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
