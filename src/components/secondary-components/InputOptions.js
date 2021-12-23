//importar las propTypes
import PropTypes from 'prop-types';
//styles
import '../../styles/components/inputOptions.scss';

const InputOptions = (props) => {
  //handle
  const handleChange = (ev) => {
    props.handleChange(props.inputName, ev.target.value);
  };

  return (
    <select
      name={props.inputName}
      id={props.id}
      className="select_input z_index"
      htmlFor={props.id}
      defaultValue={props.searchOption}
      onChange={handleChange}
    >
      <option value={props.value1}>{props.optionText1}</option>
      <option value={props.value2}> {props.optionText2}</option>
      <option value={props.value3}> {props.optionText3}</option>
      <option value={props.value4}> {props.optionText4}</option>
    </select>
  );
};

// PropTypes
InputOptions.propTypes = {
  id: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default InputOptions;
