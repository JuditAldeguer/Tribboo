import '../../styles/components/modal_window.scss';
import ButtonGetBack from './ButtonGetBack';

const ModalWindow = (props) => {
  return (
    <div className="modal">
      <div className="modal__dialog">
        <div className="modal__content">
          <header className="modal__header">
            <ButtonGetBack className="button_back" />
            <h2 className="modal__header--title">{props.title}</h2>
          </header>
          <section className="modal__section">{props.children}</section>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
