import { NavLink } from 'react-router-dom';
//Styles
import '../styles/components/lateralMenu.scss';

const LateralMenu = (props) => {
  return (
    <nav>
      <ul>
        <li>
           <img src="../images/logo.png" alt='logo'/>
        </li>
        <li>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
          <i class="fas fa-home"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
          <i class="far fa-check-square"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
          <i class="far fa-envelope"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
          <i class="far fa-user"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
          <i class="far fa-calendar-alt"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
          <i class="far fa-folder-open"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
          <i class="far fa-star"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
          <i class="fas fa-cog"></i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default LateralMenu;
