import { Form } from "react-bootstrap";

const FilterForm = () => {
  return (
    <Form>
      <Form.Control
        type="search"
        placeholder="Search note..."
        className="rounded-pill border-2 mb-3"
      />
    </Form>
  );
};

export default FilterForm;
