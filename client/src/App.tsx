import "./App.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import Note from "./features/Note/Note";
import SideControls from "./features/SideControls/SideControls";

function App() {
  return (
    <div className="App ">
      <Row className="m-0 min-vh-100 ">
        <Col className="bg-light shadow" style={{ maxWidth: "300px" }}>
          <SideControls />
        </Col>
        <Col className="p-0">
          <Note />
        </Col>
      </Row>
    </div>
  );
}

export default App;
