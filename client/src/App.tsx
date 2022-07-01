import "./App.css";
import SideLinks from "./components/SideLinks/SideLinks";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import Note from "./views/Note/Note";
import NoteContextProvider from "./views/Note/contexts/NoteContext";

function App() {
  return (
    <div className="App ">
      <Row className="m-0 min-vh-100 ">
        <Col className="bg-light shadow" style={{ maxWidth: "300px" }}>
          <SideLinks />
        </Col>
        <Col className="p-0">
          <NoteContextProvider>
            <Note />
          </NoteContextProvider>
        </Col>
      </Row>
    </div>
  );
}

export default App;
