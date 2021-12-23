//Styless
import '../styles/layout/header.scss';
//Components
import Input from './secondary-components/Input';

const Header = (props) => {
  debugger;
  return (
    <header>
      <section>
        <h1 className="title">
          Planning/ Nombre del Proyecto <i class="fas fa-chevron-down"></i> <i class="far fa-star"></i>
        </h1>
        <section className="submenu">
          <button className="btn-yellow submenu__button">Presupuestos</button>
          <button className="btn-yellow submenu__button">Planning</button>
          <button className="btn-yellow submenu__button">Certificaciones</button>
        </section>
      </section>
      <section>
        <form>
          <Input
            labelText={<i class="fas fa-search"></i>}
            inputValue={props.searchWord}
          />
        </form>
        <div>
          <image src="" alt="" />
        </div>
        <section className="submenu-rigth">
          <button className="btn-yellow submenu-rigth__button">Gantt</button>
          <button className="btn-yellow submenu-rigth__button">Kamban</button>
          <button className="btn-yellow submenu-rigth__button">Calendario</button>
        </section>
      </section>
    </header>
  );
};

export default Header;
