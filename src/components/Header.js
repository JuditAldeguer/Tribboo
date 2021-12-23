//Styless
import "../styles/layout/header.scss";
//Components
import Input from "./secondary-components/Input";

const Header = (props) => {
  debugger;
  return (
    <header>
      <section>
        <div className="row">
          <h1 className="title">
            Planning/ Nombre del Proyecto{" "}
            <i
              role="button"
              className="fas fa-chevron-down"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseButons"
              aria-expanded="true"
              aria-controls="collapseButons"
            ></i>{" "}
            {/* pendiente de hacerlo interactivo - collapsable - cambiar clase collapsed por collapse */}
            <i className="far fa-star"></i>
          </h1>
          <section className="collapsed" id="collapseButons">
            <button className="btn-yellow submenu__button">Presupuestos</button>
            <button className="btn-yellow submenu__button">Planning</button>
            <button className="btn-yellow submenu__button">
              Certificaciones
            </button>
          </section>
        </div>
      </section>
      <section className="row submenu">
        <form>
          <button className="btn"><i class="far fa-question-circle"></i></button> 
          <button className="btn"><i class="fas fa-share-alt"></i></button>
          <Input
            labelText={<i className="fas fa-search"></i>}
            inputValue={props.searchWord}
          />
        </form>
        <div>
          <image src="" alt="" />
        </div>
        <section className="submenu-rigth">
          <button className="btn-yellow submenu-rigth__button">Gantt</button>
          <button className="btn-yellow submenu-rigth__button">Kamban</button>
          <button className="btn-yellow submenu-rigth__button">
            Calendario
          </button>
        </section>
      </section>
    </header>
  );
};

export default Header;
