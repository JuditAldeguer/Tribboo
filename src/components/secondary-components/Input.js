//importar las propTypes
import PropTypes from 'prop-types';
//styles
import '../../styles/components/input.scss';

const Input = (props) => {
  //handle
  const handleChange = (ev) => {
    props.handleChange(ev.target.value);
  };
  debugger;
  return (
    <label className="label" htmlFor={props.id}>
      {props.labelText}
      <input
        className="input"
        id={props.id}
        type={props.inputType}
        name={props.inputName}
        placeholder={props.inputPlaceholder}
        value={props.searchWord}
        onChange={handleChange}
      />
    </label>
  );
};
// DefalutProps
Input.defaultProps = {
  htmlFor: "search",
  id: "search",
  name: "search",
  inputType: "text",
  placeholder: "Escribe aqui...",
  labelText: "Escribe aqui: ",
};

// PropTypes
Input.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  searchWord: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
