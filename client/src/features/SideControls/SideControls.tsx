import FilterForm from "./components/FilterForm";
import Logo from "../../components/Logo/Logo";
import useSideControls from "./hooks/useSideControls";
import NoteSnippetsWrapper from "../Note/components/NoteSnippets/NoteSnippetsWrapper";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";

const SideControls = () => {
  const { isError, isLoading, noteSnippets, handleFilterNote } =
    useSideControls();

  return (
    <div className="vh-100 d-flex flex-column">
      <Logo />
      <FilterForm handleFilter={handleFilterNote} />
      <LoadingIndicator isLoading={isLoading} />
      {noteSnippets && <NoteSnippetsWrapper noteSnippets={noteSnippets} />}
    </div>
  );
};

export default SideControls;
