import "./App.css";
import SideLinks from "./components/SideLinks/SideLinks";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App ">
      <Row className="m-0 min-vh-100 ">
        <Col className="bg-light shadow" style={{ maxWidth: "300px" }}>
          <SideLinks />
        </Col>
        {/* <Col>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque sed
          est quas corporis minima? Explicabo, vel nisi. Qui, obcaecati, earum
          blanditiis explicabo magnam mollitia consequatur, commodi atque hic
          aliquid minima.
        </Col> */}
      </Row>
    </div>
  );
}

export default App;
