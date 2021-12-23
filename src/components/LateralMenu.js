import { NavLink } from 'react-router-dom';
import logo from "../images/logo4.png";
//Styles
import '../styles/layout/lateralMenu.scss';

const LateralMenu = (props) => {
  return (
    <nav>
      <ul className="nav flex-column">
        <li className="first-element">
          <img className='logo' src={logo} alt="logo" />
        </li>

        <li>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
            <button className="btn btn-line">
              <i className="fas fa-home"></i>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
            <button className="btn btn-line">
              <i className="far fa-check-square"></i>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
            <button className="btn btn-line">
              <i className="far fa-envelope"></i>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
            <button className="btn btn-line">
              <i className="far fa-user"></i>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
            <button className="btn btn-line">
              {" "}
              <i className="far fa-calendar-alt"></i>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
            <button className="btn btn-line">
              {" "}
              <i className="far fa-folder-open"></i>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
            <button className="btn btn-line">
              {" "}
              <i className="far fa-star"></i>
            </button>
          </NavLink>
        </li>
        <li className="last-element">
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
