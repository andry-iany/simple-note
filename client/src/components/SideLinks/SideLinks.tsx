import FilterForm from "./FilterForm";
import Logo from "./Logo";
import Notes from "./Notes";

const SideLinks = () => {
  return (
    <div className="vh-100 d-flex flex-column">
      <Logo />
      <FilterForm />
      <Notes />
    </div>
  );
};

export default SideLinks;
