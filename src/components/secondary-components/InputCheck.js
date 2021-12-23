//importar las propTypes
import PropTypes from 'prop-types';
//styles
import '../../styles/components/input.scss';

const InputCheck = (props) => {
  //handle
  const handleChange = (ev) => {
    props.handleChange(props.inputName, ev.target.checked);
  };

  return (
    <label className="label z_index" htmlFor={props.id}>
      {props.labelText}
      <input
        className="input"
        id={props.id}
        type="checkbox"
        name={props.inputName}
        value={props.searchWord}
        onChange={handleChange}
      />
    </label>
  );
};
// // DefalutProps
// Input.defaultProps = {
//   inputType: 'text',
//   placeholder: 'Escribe aqui...',
//   labelText: 'Escribe aqui: ',
// };

// // PropTypes
// Input.propTypes = {
//   id: PropTypes.string,
//   labelText: PropTypes.string.isRequired,
//   inputType: PropTypes.string,
//   inputName: PropTypes.string.isRequired,
//   inputPlaceholder: PropTypes.string,
//   inputValue: PropTypes.string,
//   handleChange: PropTypes.func.isRequired,
// };

export default InputCheck;
