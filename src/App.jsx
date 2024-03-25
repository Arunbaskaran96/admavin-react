import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import GameHome from "./pages/task4/GameHome";
import FileHome from "./pages/task2/FileHome";
import Square from "./pages/task5/Square";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GameHome />} />
          <Route path="/file" element={<FileHome />} />
          <Route path="/square" element={<Square />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
