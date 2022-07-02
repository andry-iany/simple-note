import useCustContext from "../../../hooks/useCustContext";
import { NoteContext } from "../contexts/NoteContext";
import { INoteActionType } from "../reducers/noteReducer";

const useNote = () => {
  const { isEditing, dispatch } = useCustContext(NoteContext);

  const handleStartNew = () => {
    dispatch({ type: INoteActionType.CREATE });
  };
  const handleDelete = () => {
    dispatch({ type: INoteActionType.DELETE });
  };
  const handleStartEdit = () => {
    dispatch({ type: INoteActionType.START_EDIT });
  };

  return {
    isEditing,
    handleStartNew,
    handleDelete,
    handleStartEdit,
  };
};

export default useNote;
