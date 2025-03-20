import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
