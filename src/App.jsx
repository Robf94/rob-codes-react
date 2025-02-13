import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WorkSubpage from "./pages/WorkSubpage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":url" element={<WorkSubpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
