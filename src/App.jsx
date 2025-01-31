import Header from "./Components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
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
