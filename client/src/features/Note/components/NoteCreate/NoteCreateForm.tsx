import { FC } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useNoteCreateForm from "../../hooks/useNoteCreateForm";
import { INotePreview } from "../../interfaces/INote";

export interface INoteCreateForm {
  initialNote?: INotePreview;
  handleChange: (note: INotePreview) => void;
  handleSubmit: (note: INotePreview) => void;
}

const NoteCreateForm: FC<INoteCreateForm> = (props) => {
  const { initialNote, validated, handleChange, handleSubmit } =
    useNoteCreateForm(props);

  return (
    <Form
      noValidate
      validated={validated}
      onChange={handleChange}
      onSubmit={handleSubmit}
      className="h-100 d-flex flex-column"
    >
      <Form.Group className="mb-3">
        <Form.Control
          required
          type="text"
          name="formTitle"
          className="border-2"
          placeholder="The title of the note..."
          defaultValue={initialNote?.title}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a title to your note
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 h-100">
        <Form.Control
          as="textarea"
          name="formBody"
          defaultValue={initialNote?.body}
          style={{ resize: "none" }}
          className="border-2 h-100"
          placeholder="The body of the note..."
        />
      </Form.Group>
      <Form.Group className="text-center">
        <Button
          type="submit"
          variant="success"
          className="mx-2 rounded-pill px-4"
        >
          Save
        </Button>
        <Link to="/" className="mx-2">
          <Button variant="danger" className="rounded-pill px-4">
            Cancel
          </Button>
        </Link>
      </Form.Group>
    </Form>
  );
};

export default NoteCreateForm;
