import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import GameHome from "./pages/task4/GameHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GameHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
