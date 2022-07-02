import FilterForm from "./components/FilterForm";
import Logo from "../../components/Logo/Logo";
import useSideControls from "./hooks/useSideControls";
import NoteSnippetsWrapper from "../Note/components/NoteSnippets/NoteSnippetsWrapper";

const SideControls = () => {
  const { noteSnippets } = useSideControls();

  return (
    <div className="vh-100 d-flex flex-column">
      <Logo />
      <FilterForm />
      {noteSnippets && <NoteSnippetsWrapper noteSnippets={noteSnippets} />}
    </div>
  );
};

export default SideControls;
