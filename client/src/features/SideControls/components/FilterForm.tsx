import { FC } from "react";
import { Form } from "react-bootstrap";
import useFilterForm from "../hooks/useFilterForm";

export interface IFilterForm {
  handleFilter: (filterValue: string) => void;
}

const FilterForm: FC<IFilterForm> = ({ handleFilter }) => {
  const { handleChange } = useFilterForm({ handleFilter });

  return (
    <Form onChange={handleChange}>
      <Form.Control
        type="search"
        name="search"
        placeholder="Search note..."
        className="rounded-pill border-2 mb-3"
      />
    </Form>
  );
};

export default FilterForm;
