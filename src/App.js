import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Routes, Route, Link } from "react-router-dom";

import { DnD } from "./components/DnD";
import { DnDWithLibrary } from "./components/DndWithLibrary";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Link to="/DnD" className="route-link">
          Ссылка на страницу, где реализован Drag and Drop без библиотек
        </Link>
        <Link to="/DnDWithLibrary" className="route-link">
          Ссылка на страницу, где Drag and Drop реализован с помощью библиотеки
        </Link>
      </header>
      <Routes>
        <Route path="/DnD" element={<DnD />} />
        <Route
          path="/DnDWithLibrary"
          element={
            <DndProvider backend={HTML5Backend}>
              <DnDWithLibrary />
            </DndProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
