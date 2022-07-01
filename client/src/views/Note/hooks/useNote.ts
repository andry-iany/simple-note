import useCustContext from "../../../hooks/useCustContext";
import { NoteContext } from "../contexts/NoteContext";

const useNote = () => {
  const { isEditing } = useCustContext(NoteContext);

  const handleStartNew = () => {
    // display form to create new note
  };
  const handleDelete = () => {
    // delete a note
  };
  const handleStartEdit = () => {
    // setPreview(note);
    // setIsEditing(true);
  };

  return {
    isEditing,
    handleStartNew,
    handleDelete,
    handleStartEdit,
  };
};

export default useNote;
