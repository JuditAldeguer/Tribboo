import '../../styles/components/buttonGetBack.scss';

const ButtonGetBack = (props) => {
  const handleBackBtn = (ev) => {
    ev.preventDefault();
    window.history.back();
  };
  return (
    <button className="button_back" title="atrás" onClick={handleBackBtn}>
      Go Back
    </button>
  );
};

export default ButtonGetBack;
