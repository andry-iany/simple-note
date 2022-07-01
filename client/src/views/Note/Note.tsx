import { Col, Row } from "react-bootstrap";
import NotePreview from "./NotePreview";
import NoteEditForm from "./NoteEditForm";
import IconRounded from "../../components/IconRounded/IconRounded";
import useNote from "./hooks/useNote";

import trash from "../../assets/icons/trash.svg";
import pencil from "../../assets/icons/pencil.svg";
import plus from "../../assets/icons/plus.svg";

export interface INote {
  title: string;
  body: string;
}

const Note = () => {
  const {
    note,
    preview,
    isEditing,
    setPreview,
    handleDelete,
    handleStartNew,
    handleStartEdit,
    handleCancelEdit,
    handleSubmitEdit,
  } = useNote();

  if (isEditing) {
    return (
      <div className="px-5 py-4 vh-100 d-flex flex-column">
        <div className="bg-light p-4 h-100">
          <Row className="h-100">
            <Col className="h-100">
              <NoteEditForm
                note={preview}
                setNote={setPreview}
                handleSubmit={handleSubmitEdit}
                handleCancel={handleCancelEdit}
              />
            </Col>
            <Col className="h-100 overflow-auto">
              <NotePreview note={preview} />
            </Col>
          </Row>
        </div>
      </div>
    );
  } else {
    return (
      <div className="px-5 py-4 vh-100 d-flex flex-column">
        <div className="bg-light p-4 h-100">
          <Row className="h-100">
            <Col className="h-100 overflow-auto">
              <div className="text-end py-2">
                <IconRounded
                  src={plus}
                  onClick={handleStartNew}
                  className="icon-rounded"
                />
                <IconRounded
                  src={pencil}
                  onClick={handleStartEdit}
                  className="icon-rounded"
                />
                <IconRounded
                  src={trash}
                  onClick={handleDelete}
                  className="icon-rounded"
                />
              </div>
              <NotePreview note={note} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
};

export default Note;
