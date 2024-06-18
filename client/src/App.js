import "./App.css";
import Header from "./components/header/header";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
