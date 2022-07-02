import "./App.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import Note from "./features/Note/Note";
import SideControls from "./features/SideControls/SideControls";
import { Route, Routes } from "react-router-dom";
import NoteEdit from "./features/Note/components/NoteEdit/NoteEdit";
import NoteDetail from "./features/Note/components/NoteDetail/NoteDetail";
import NoteNoDetail from "./features/Note/components/NoteDetail/NoteNoDetail";
import NoteCreate from "./features/Note/components/NoteCreate/NoteCreate";

function App() {
  return (
    <div className="App ">
      <Row className="m-0 min-vh-100 ">
        <Col className="bg-light shadow" style={{ maxWidth: "300px" }}>
          <SideControls />
        </Col>
        <Col className="p-0">
          <Routes>
            <Route path="/" element={<Note />}>
              <Route index element={<NoteNoDetail />} />
              <Route path="new" element={<NoteCreate />} />
              <Route path="note/:id" element={<NoteDetail />} />
              <Route path="edit/:id" element={<NoteEdit />} />
            </Route>
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default App;
