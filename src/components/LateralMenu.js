import { unsupportedEnvironment } from 'node-sass/lib/errors';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import logo from "../images/logo.png";
//Styles
import '../styles/layout/lateralMenu.scss';

const LateralMenu = (props) => {
  return (
    <nav className="nav fixed-top">
      <ul className="nav flex-column">
        <li key={uuid()} className="first-el">
          <img className="logo" src={logo} alt="logo" />
        </li>

        <li key={uuid()}>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
            <button className="btn btn-line">
              <i className="fas fa-home"></i>
            </button>
          </NavLink>
        </li>
        <li key={uuid()}>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
            <button className="btn btn-line">
              <i className="far fa-check-square"></i>
            </button>
          </NavLink>
        </li>
        <li key={uuid()}>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
            <button className="btn btn-line">
              <i className="far fa-envelope"></i>
            </button>
          </NavLink>
        </li>
        <li key={uuid()}>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
            <button className="btn btn-line">
              <i className="far fa-user"></i>
            </button>
          </NavLink>
        </li>
        <li key={uuid()}>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
            <button className="btn btn-line">
              {" "}
              <i className="far fa-calendar-alt"></i>
            </button>
          </NavLink>
        </li>
        <li key={uuid()}>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
            <button className="btn btn-line">
              {" "}
              <i className="far fa-folder-open"></i>
            </button>
          </NavLink>
        </li>
        <li key={uuid()} className="penultimate-el">
          <NavLink to="/" title="inicio" activeClassName="selected-link">
            <button className="btn btn-line">
              {" "}
              <i className="far fa-star"></i>
            </button>
          </NavLink>
        </li>
        <li key={uuid()} className="last-el">
          <NavLink to="/" title="inicio" activeClassName="selected-link">
            <button className="btn btn-line">
              {" "}
              <i className="fas fa-cog"></i>
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default LateralMenu;
