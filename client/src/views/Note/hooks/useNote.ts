import useCustContext from "../../../hooks/useCustContext";
import { NoteContext } from "../contexts/NoteContext";
import { INoteActionType } from "../reducers/noteReducer";

const useNote = () => {
  const { isEditing, dispatch } = useCustContext(NoteContext);

  const handleStartNew = () => {
    // display form to create new note
    dispatch(INoteActionType.CANCEL_EDIT);
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
