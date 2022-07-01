import { Button, Form } from "react-bootstrap";
import useNoteEditForm from "./hooks/useNoteEditForm";

const NoteEditForm = () => {
  const { note, handleCancel, handleChange, handleSubmit } = useNoteEditForm();

  return (
    <Form
      onChange={handleChange}
      onSubmit={handleSubmit}
      className="h-100 d-flex flex-column"
    >
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="title"
          className="border-2"
          placeholder="The title of the note..."
          defaultValue={note.title}
        />
      </Form.Group>
      <Form.Group className="mb-3 h-100">
        <Form.Control
          as="textarea"
          name="body"
          defaultValue={note.body}
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
        <Button
          type="button"
          variant="danger"
          onClick={handleCancel}
          className="mx-2 rounded-pill px-4"
        >
          Cancel
        </Button>
      </Form.Group>
    </Form>
  );
};

export default NoteEditForm;
