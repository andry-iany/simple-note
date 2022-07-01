import { useState } from "react";
import { INote } from "../Note";

const useNote = () => {
  const [note, setNote] = useState<INote>({ title: "", body: "" });
  const [preview, setPreview] = useState<INote>({ title: "", body: "" });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleStartNew = () => {
    // display form to create new note
  };
  const handleDelete = () => {
    // delete a note
  };
  const handleStartEdit = () => {
    setPreview(note);
    setIsEditing(true);
  };
  const handleCancelEdit = () => {
    setIsEditing(false);
  };
  const handleSubmitEdit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    // editing note finished
    e.preventDefault();
    // just for now
    setNote(preview);
    setIsEditing(false);
  };

  return {
    note,
    setNote,
    preview,
    setPreview,
    isEditing,
    handleStartNew,
    handleStartEdit,
    handleCancelEdit,
    handleSubmitEdit,
    handleDelete,
  };
};

export default useNote;
