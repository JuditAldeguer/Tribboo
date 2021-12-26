import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
//Services
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


  // useEffect
  useEffect(() => {
    getUpdatedData();
  }, [data]);

  // handles
  const handleChange = (searchWord) => {
    setSearchWord(searchWord);
  };

  const handleUpdatedData = (id, newValue) => {
    const found = data.find((task) => task.idTask === id);
    found.status = newValue;
    setData([...data]);
  };
  const handleAddToData = (newTask) => { 
    setData([...data, newTask]);
  };

  const getUpdatedData = () => {
    const newProcess = data.filter((task) => task.status === "IN_PROGRESS");
    setInProcess(newProcess);
    const newToDo = data.filter((task) => task.status === "TODO");
    setToDo(newToDo);
    const newDone = data.filter((task) => task.status === "DONE");
    setDone(newDone);
  };


  return (
    <div className="container">
      <Header inputValue={searchWord} handleChange={handleChange} />
      <LateralMenu />
      <Columns
        searchWord={searchWord}
        toDo={toDo}
        done={done}
        inProcess={inProcess}
        data={data}
        handleUpdatedData={handleUpdatedData}
        handleAddToData={handleAddToData}
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

export default App;
