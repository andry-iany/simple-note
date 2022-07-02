import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import IconRounded from "../../../../components/IconRounded/IconRounded";

import plus from "../../../../assets/icons/plus.svg";
import trash from "../../../../assets/icons/trash.svg";
import pencil from "../../../../assets/icons/pencil.svg";
import useNoteDetail from "../../hooks/useNoteDetail";
import NotePreview from "../NotePreview/NotePreview";

const NoteDetail = () => {
  const { noteId, handleDelete, noteDetailed } = useNoteDetail();

  return (
    <Row className="h-100">
      <Col className="h-100 overflow-auto">
        <div className="text-end py-2">
          <Link to="/new">
            <IconRounded src={plus} className="icon-rounded" />
          </Link>
          <Link to={`/edit/${noteId}`}>
            <IconRounded src={pencil} className="icon-rounded" />
          </Link>
          <IconRounded
            src={trash}
            onClick={handleDelete}
            className="icon-rounded"
          />
        </div>
        <NotePreview note={noteDetailed} />
      </Col>
    </Row>
  );
};

export default NoteDetail;
