import React, { FC, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { INote } from "./Note";

export interface INoteEditForm {
  note: INote;
  setNote: (note: INote | ((note: INote) => INote)) => void;
  handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  handleCancel: (e: React.SyntheticEvent) => void;
}

const NoteEditForm: FC<INoteEditForm> = ({
  note,
  setNote,
  handleSubmit,
  handleCancel,
}) => {
  const handleChange = (e: React.SyntheticEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const inputName = target.name;

    if (inputName === "title" || inputName === "body") {
      setNote((note) => {
        return { ...note, [inputName]: target.value };
      });
    }
  };

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
