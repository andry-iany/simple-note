import { Col, Row } from "react-bootstrap";
import NotePreview from "./components/NotePreview";
import NoteEditForm from "./components/NoteEditForm";
import IconRounded from "../../components/IconRounded/IconRounded";
import useNote from "./hooks/useNote";

import trash from "../../assets/icons/trash.svg";
import pencil from "../../assets/icons/pencil.svg";
import plus from "../../assets/icons/plus.svg";
import NoteContextProvider from "./contexts/NoteContext";

export interface INote {
  title: string;
  body: string;
}

export const isNote = (note: any): note is INote => {
  return typeof note?.title === "string" && typeof note?.body === "string";
};

const NoteWithNoteContext = () => {
  return (
    <NoteContextProvider>
      <Note />
    </NoteContextProvider>
  );
};

const Note = () => {
  const { isEditing, handleStartNew, handleDelete, handleStartEdit } =
    useNote();

  if (isEditing) {
    return (
      <div className="px-5 py-4 vh-100 d-flex flex-column">
        <div className="bg-light p-4 h-100">
          <Row className="h-100">
            <Col className="h-100">
              <NoteEditForm />
            </Col>
            <Col className="h-100 overflow-auto">
              <NotePreview />
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
              <NotePreview />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
};

export default NoteWithNoteContext;
