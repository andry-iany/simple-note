import useCustContext from "../../../hooks/useCustContext";
import { NoteContext } from "../contexts/NoteContext";
import { INoteActionType } from "../reducers/noteReducer";

const useNoteEditForm = () => {
  const { note, dispatch } = useCustContext(NoteContext);

  const handleChange = (e: React.SyntheticEvent<HTMLFormElement>) => {
    const note = {
      title: (e.currentTarget.formTitle?.value as string) || "",
      body: (e.currentTarget.formBody?.value as string) || "",
    };
    dispatch({ type: INoteActionType.UPDATE_PREVIEW, payload: note });
  };

  const handleSubmit = () => {
    dispatch({ type: INoteActionType.SUBMIT_EDIT });
  };

  const handleCancel = () => {
    dispatch({ type: INoteActionType.CANCEL_EDIT });
  };

  return {
    note,
    handleCancel,
    handleChange,
    handleSubmit,
  };
};

export default useNoteEditForm;
