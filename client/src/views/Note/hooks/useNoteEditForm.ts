import { useState } from "react";
import useCustContext from "../../../hooks/useCustContext";
import { NoteContext } from "../contexts/NoteContext";
import { INoteActionType } from "../reducers/noteReducer";

const useNoteEditForm = () => {
  const { note, dispatch } = useCustContext(NoteContext);
  const [validated, setValidated] = useState(false);

  const handleChange = (e: React.SyntheticEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const note = {
      title: (form.formTitle?.value as string) || "",
      body: (form.formBody?.value as string) || "",
    };
    dispatch({ type: INoteActionType.UPDATE_PREVIEW, payload: note });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      dispatch({ type: INoteActionType.SUBMIT_EDIT });
    }
    setValidated(true);
  };

  const handleCancel = () => {
    dispatch({ type: INoteActionType.CANCEL_EDIT });
  };

  return {
    note,
    validated,
    handleCancel,
    handleChange,
    handleSubmit,
  };
};

export default useNoteEditForm;
