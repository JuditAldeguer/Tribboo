import TaskItem from './secondary-components/TaskItem';
//Styles
import '../styles/components/columns.scss';

const Columns = (props) => {  

  const renderListtoDo = () => {
    props.toDo.map((task) => {
      return (
           <li key={task.id} className="list-group-item">
              <TaskItem task={task} />
            </li>);
    });
  };
    
    const renderListInProcess = () => {
      props.inProcess.map((task) => {
        return (
          <li key={task.id} className="list-group-item">
            <TaskItem task={task} />
          </li>
        );
      });
    };

   const renderListDone = () => {
     props.done.map((task) => {
       return (
         <li key={task.id} className="list-group-item">
           <TaskItem task={task} />
         </li>
       );
     });
   };

  return (
    <main className="hstack gap-3 container">
      <div className="bg-light border vstack">
        <h2>
          A hacer <i className="fas fa-plus"></i>
        </h2>
        <ul>{renderListtoDo()}</ul>
      </div>
      <div className="bg-light border vstack">
        <h2>
          En proceso <i className="fas fa-plus"></i>
        </h2>
        <ul>{renderListInProcess()}</ul>
      </div>
      <div className="bg-light border vstack">
        <h2>
          Objetivos cumplidos <i className="fas fa-plus"></i>
        </h2>
        <ul>{renderListDone()}</ul>
      </div>
    </main>
  );
};

export default Columns;
