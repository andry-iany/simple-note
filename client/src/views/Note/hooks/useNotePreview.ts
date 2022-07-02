import useCustContext from "../../../hooks/useCustContext";
import { NoteContext } from "../contexts/NoteContext";

const useNotePreview = () => {
  const { note, preview, isEditing } = useCustContext(NoteContext);
  return { note, preview, isEditing };
};

export default useNotePreview;
