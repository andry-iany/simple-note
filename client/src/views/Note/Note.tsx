import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import NoteEditForm from "./NoteEditForm";
import NotePreview from "./NotePreview";

export interface INote {
  title: string;
  body: string;
}

const Note = () => {
  const [preview, setPreview] = useState<INote>({ title: "", body: "" });
  return (
    <div className="px-5 py-4 vh-100 d-flex flex-column">
      <div className="bg-light p-4 h-100">
        <Row xs={2} className="h-100">
          <Col className="h-100">
            <NoteEditForm setNote={setPreview} />
          </Col>
          <Col className="h-100 overflow-auto">
            <NotePreview note={preview} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Note;
