// import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:slug" element={<VideoDetail />} />
      </Routes>
    </>
  );
}

export default App;
