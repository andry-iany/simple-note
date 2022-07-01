import useCustContext from "../../../hooks/useCustContext";
import { NoteContext } from "../contexts/NoteContext";

const useNoteEditForm = () => {
  const { note } = useCustContext(NoteContext);

  const handleChange = (e: React.SyntheticEvent<HTMLFormElement>) => {
    //
  };

  const handleSubmit = () => {
    // context?.dispatch()
  };

  const handleCancel = () => {
    // context?.dispatch()
  };

  return {
    note,
    handleCancel,
    handleChange,
    handleSubmit,
  };
};

export default useNoteEditForm;
