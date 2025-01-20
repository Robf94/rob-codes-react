import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </>
  );
}

export default App;
