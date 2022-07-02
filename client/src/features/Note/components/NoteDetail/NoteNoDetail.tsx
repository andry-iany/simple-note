import { Link } from "react-router-dom";
import plus from "../../../../assets/icons/plus.svg";
import IconRounded from "../../../../components/IconRounded/IconRounded";

const NoteNoDetail = () => {
  return (
    <div className="h-100 d-flex flex-column justify-content-center text-center text-muted">
      <p className="mb-0">No note to show here</p>
      <p>Click a note on the left or create a new one</p>
      <Link to="/new">
        <IconRounded src={plus} className="icon-rounded" />
      </Link>
    </div>
  );
};

export default NoteNoDetail;
