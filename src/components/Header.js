import { useState } from "react";
//Styless
import "../styles/layout/header.scss";
import user from "../images/user2.png";
//Components
import Input from "./secondary-components/Input";

const Header = (props) => {
  const [selected, setSelected] = useState("");
  const [state, setState] = useState(false);
  const handleChange = (searchWord) => {
    props.handleChange(searchWord);
  };

  return (
    <header className="container">
      <section className="left-section">
        <div className="row">
          <h1 className="left-section--title">
            Planning/ Nombre del Proyecto
            <button className="btn-white">
              <i
                className="fas fa-chevron-down"
                data-bs-toggle="collapse"
                data-bs-target="#collapseButons"
                aria-expanded="true"
                aria-controls="collapseButons"
              ></i>
            </button>
            <button className="btn-white">
              <i
                className={`${state ? "fas" : "far"} fa-star`}
                onClick={(e) => {
                  const update = !state;
                  setState(update);
                }}
              ></i>
            </button>
          </h1>
          <section
            className="left-section--submenu collapsed"
            id="collapseButons"
          >
            <button className="btn-yellow">Presupuestos</button>
            <button className="btn-yellow ">Planning</button>
            <button className="btn-yellow ">Certificaciones</button>
          </section>
        </div>
      </section>
      <section className="row right-section">
        <form className="hstack form">
          <button className="right-section--btn btn">
            <i className="far fa-question-circle"></i>
          </button>
          <button className="right-section--btn btn">
            <i className="fas fa-share-alt"></i>
          </button>
          <Input
            labelText=""
            inputValue={props.inputValue}
            handleChange={handleChange}
            inputType="text"
          />

          <img className="right-section--user" src={user} alt="usuario" />
        </form>

        <section className="right-section--submenu">
          <button className="btn-yellow right-section--submenu__button">
            Gantt
          </button>
          <button className="btn-yellow right-section--submenu__button">
            Kamban
          </button>
          <button className="btn-yellow right-section--submenu__button">
            Calendario
          </button>
        </section>
      </section>
    </header>
  );
};

export default Header;
