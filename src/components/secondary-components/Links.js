import { NavLink } from 'react-router-dom';
//Styles
import '../../styles/components/links.scss';

const Links = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" title="inicio" activeClassName="selected-link">
            Ir al inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/product-detail/${props.productId}`}
            title="producto"
            activeClassName="selected-link"
          >
            Ir al Producto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Links;
