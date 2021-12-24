//Styles
import "../../styles/components/inputOption.scss";

const InputOption = (props) => {
    return (
      <form id={props.p}>
        <select
          onChange={(ev) => {
            props.updateStatus(ev);
          }}
          defaultValue="choose"
          name="status"
          id="status"
        >
          <option disabled value="choose">
            {props.defaultValue}
          </option>
          <option value={props.firtsValue}>{props.firtsText}</option>
          <option value={props.secondValue}>{props.secondText}</option>
          <option value={props.thirdValue}>{props.thirdText}</option>
        </select>
      </form>
    );
};

export default InputOption;