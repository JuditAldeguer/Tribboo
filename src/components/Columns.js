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
      <div>
        <h2>
          A hacer <i class="fas fa-plus"></i>
        </h2>
        <ul>{renderList()}</ul>
      </div>
      <div>
        <h2>
          En proceso <i class="fas fa-plus"></i>
        </h2>
        <u>Hola</u>
      </div>
      <div>
        <h2>
          Objetivos cumplidos <i class="fas fa-plus"></i>
        </h2>
        <u>Hola</u>
      </div>
    </main>
  );
};

export default Columns;
