import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
//Services
import ls from '../services/local-storage.js'; //localStorage
import t from "../services/initialState.json";
//Styles
import '../styles/App.scss';
//Components
import Header from './Header';
import LateralMenu from './LateralMenu';
import Columns from "./Columns";
import NotFoundPage from './secondary-components/NotFoundPage';

function App() {
  //useState
  const [searchWord, setSearchWord] = useState("");
  const [data, setData] = useState(t);
  const [toDo, setToDo] = useState([]);
  const [inProcess, setInProcess] = useState([]);
  const [done, setDone] = useState([]);

  //useEffect
  useEffect(() => {
    getUpdatedData();
  }, [done, inProcess, toDo, data]);

  //handles
  const handleChange = (searchWord) => {
    setSearchWord(searchWord);
  };

  const getUpdatedData = () => {
    const newData = {
      "idTask": "b5561ab5-0c28-4801-941e-4750df2cf2fc",
      "taskName": "Piscina",
      "description": "Lorem ipsum dolor sit...",
      "startAt": "21/12/2018",
      "endAt": "24/12/2021",
      "status": "TODO",
      "phase": "1"
    };
    data.concat(newData);
    setData([...data]);
    debugger;
    data.forEach(task => {
      if (task.status === "TODO" && toDo > 0) {
        // setToDo([...toDo, task]);
        console.log(toDo);
        toDo.push(task);
        
      } if (task.status === "IN_PROGRESS") {
        inProcess.push(task);
      } if (task.status === "DONE") {
        done.push(task);
      } 
    });
  };


  const handleToDo = (toDo) => {
    setToDo(toDo);
  };
  const handleInProcess = (inProcess) => {
    setInProcess(inProcess);
  };
  const handleDone = (done) => {
    setDone(done);
  };

  return (
    <div className="container">
      <Header inputValue={searchWord} handleChange={handleChange} />
      <LateralMenu />
      <Columns
        toDo={toDo}
        handleToDo={handleToDo}
        inProcess={inProcess}
        handleInProcess={handleInProcess}
        done={done}
        handleDone={handleDone}
      />
      <Switch>
        <Route path="/" exact />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

// // DefalutProps
// Input.defaultProps = {
//   inputType: 'text',
//   placeholder: 'Escribe aqui...',
//   labelText: 'Escribe aqui: ',
// };

// // PropTypes
// Input.propTypes = {
//   id: PropTypes.string,
//   labelText: PropTypes.string.isRequired,
//   inputType: PropTypes.string,
//   inputName: PropTypes.string.isRequired,
//   inputPlaceholder: PropTypes.string,
//   inputValue: PropTypes.string,
//   handleChange: PropTypes.func.isRequired,
// };

export default App;
