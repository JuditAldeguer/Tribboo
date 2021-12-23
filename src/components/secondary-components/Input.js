//importar las propTypes
import PropTypes from 'prop-types';
//styles
import '../../styles/components/input.scss';

const Input = (props) => {
  const p = props;
  debugger;
  console.log(p.inputValue);
  //handle
  const handleChange = (ev) => {
    props.handleChange(ev.target.value);
  };
  
  return (
    <label className="label" htmlFor={props.id}>
      {props.labelText}
      <input
        className="form-control me-2"
        id={props.id}
        type={props.inputType}
        name={props.inputName}
        placeholder={props.inputPlaceholder}
        value={props.inputValue}
        onChange={handleChange}
      />
      <i className="fas fa-search"></i>
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
  labelText: "Escribe aqui: "
};

// PropTypes
Input.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string,
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  searchWord: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
