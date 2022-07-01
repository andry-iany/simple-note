import useCustContext from "../../../hooks/useCustContext";
import { NoteContext } from "../contexts/NoteContext";

const useNotePreview = () => {
  const { note } = useCustContext(NoteContext);
  return { note };
};

export default useNotePreview;
