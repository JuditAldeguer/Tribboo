//Services
import t from '../../services/initialState.json';
//Styles
import '../../styles/components/taskItem.scss';

const TaskItem = (props) => {
  return (
    <ul className="container">
      <li className="list-group-item">
        <h3>{t[0].taskName}</h3> <i className="fas fa-ellipsis-h"></i>
        <p>{t[0].description}</p>
        <button className={`fase fase--${t[0].phase}`}>
          FASE {t[0].description}
        </button>
        <p className="date">
          {t[0].startAt} - {t[0].endAt}
        </p>
      </li>
      <li className="list-group-item">
        <h3>{t[1].taskName}</h3> <i className="fas fa-ellipsis-h"></i>
        <p>{t[1].description}</p>
        <button className={`fase fase--${t[1].phase}`}>
          FASE {t[1].description}
        </button>
        <p className="date">
          {t[1].startAt} - {t[1].endAt}
        </p>
      </li>
      <li className="list-group-item">
        <h3>{t[2].taskName}</h3> <i className="fas fa-ellipsis-h"></i>
        <p>{t[2].description}</p>
        <button className={`fase fase--${t[2].phase}`}>
          FASE {t[2].description}
        </button>
        <p className="date">
          {t[2].startAt} - {t[2].endAt}
        </p>
      </li>
    </ul>
  );
};

export default TaskItem;
