import { useEffect, useState } from 'react';
// import { v4 as uuid } from 'uuid'; // al generar id={uuid()}
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
//Services
import callToApi from '../services/api';
import ls from '../services/local-storage.js'; //localStorage
//Styles
import "bootstrap/scss/bootstrap.scss";
import '../styles/App.scss';
//Components
import Header from './Header';
import LateralMenu from './LateralMenu';
import Main from './Columns';
import NotFoundPage from './secondary-components/NotFoundPage';

function App() {
  const [searchWord, setSearchWord] = useState("gola");


  return (
    <div className="page">
      <Header inputValue={searchWord} />
      <LateralMenu />
      <Main/>
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
