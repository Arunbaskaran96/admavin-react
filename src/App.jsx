import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import GameHome from "./pages/task4/GameHome";
import FileHome from "./pages/task2/FileHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GameHome />} />
          <Route path="/file" element={<FileHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
