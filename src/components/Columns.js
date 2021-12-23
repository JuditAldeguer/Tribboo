import TaskItem from './secondary-components/TaskItem';
//Styles
import '../styles/components/columns.scss';

const Columns = (props) => {
    const renderList = () => {
        return (
            <TaskItem/>);
    };
  return (
    <main>
      <div className="list-group">
        <h2>
          A hacer <i className="fas fa-plus"></i>
        </h2>
        <ul>{renderList()}</ul>
      </div>
      <div className="list-group">
        <h2>
          En proceso <i className="fas fa-plus"></i>
        </h2>
        <u>Hola</u>
      </div>
      <div className="list-group">
        <h2>
          Objetivos cumplidos <i className="fas fa-plus"></i>
        </h2>
        <u>Hola</u>
      </div>
    </main>
  );
};

export default Columns;
