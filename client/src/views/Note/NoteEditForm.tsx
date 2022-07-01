import React, { FC, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import Note, { INote } from "./Note";

export interface INoteEditForm {
  setNote: (note: INote | ((note: INote) => INote)) => void;
}

const NoteEditForm: FC<INoteEditForm> = ({ setNote }) => {
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
    <Form onChange={handleChange} className="h-100 d-flex flex-column">
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="title"
          className="border-2"
          placeholder="The title of the note..."
        />
      </Form.Group>
      <Form.Group className="mb-3 h-100">
        <Form.Control
          as="textarea"
          name="body"
          className="border-2 h-100"
          placeholder="The body of the note..."
          style={{ resize: "none" }}
        />
      </Form.Group>
      <Form.Group className="text-center">
        <Button className="mx-2 rounded-1 px-4" variant="success">
          Save
        </Button>
        <Button className="mx-2 rounded-1 px-4" variant="danger">
          Cancel
        </Button>
      </Form.Group>
    </Form>
  );
};

export default NoteEditForm;
