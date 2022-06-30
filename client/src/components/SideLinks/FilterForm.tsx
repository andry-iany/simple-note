import { Form } from "react-bootstrap";

const FilterForm = () => {
  return (
    <Form>
      <Form.Control
        type="search"
        placeholder="Search note..."
        className="rounded-pill"
      />
    </Form>
  );
};

export default FilterForm;
