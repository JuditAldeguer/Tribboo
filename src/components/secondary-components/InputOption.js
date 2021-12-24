//Styles
import "../../styles/components/inputOption.scss";

const InputOption = (props) => {
    return (
      <form id={props.p}>
        <select
        onChange={(ev) => { props.updateStatus(ev) }}
          defaultValue="choose"
          name="status"
          id="status"
        >
          <option disabled value="choose">
            Escoge...
          </option>
          <option value="TODO">A hacer</option>
          <option value="IN_PROGRESS">En proceso</option>
          <option value="DONE">O. Cumplido</option>
        </select>
      </form>
    );
};

export default InputOption;