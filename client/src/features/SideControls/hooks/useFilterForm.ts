import { IFilterForm } from "./../components/FilterForm";

interface IArgs {
  handleFilter: IFilterForm["handleFilter"];
}

const useFilterForm = ({ handleFilter }: IArgs) => {
  const handleChange = (e: React.SyntheticEvent<HTMLFormElement>) => {
    handleFilter(e.currentTarget?.search?.value || "");
  };

  return { handleChange };
};

export default useFilterForm;
