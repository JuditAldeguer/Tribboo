import ModalWindow from './ModalWindow';
import '../../styles/components/notFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="not_found_page">
      <ModalWindow title="ERROR: The page you are looking for does not exist">
        <p>
          Check if the site address
          <span className="cursiva"> (url)</span> is correct.
        </p>
      </ModalWindow>
    </div>
  );
};
export default NotFoundPage;
