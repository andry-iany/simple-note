import { Col, Row } from "react-bootstrap";
import NoteCreateForm from "./NoteCreateForm";
import NotePreview from "../NotePreview/NotePreview";
import useNoteCreate from "../../hooks/useNoteCreate";

const NoteCreate = () => {
  const { handleChange, handleSubmit, notePreview } = useNoteCreate();

  return (
    <Row className="h-100">
      <Col className="h-100">
        <NoteCreateForm
          initialNote={notePreview}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Col>
      <Col className="h-100 overflow-auto">
        <NotePreview note={notePreview} />
      </Col>
    </Row>
  );
};

export default NoteCreate;
