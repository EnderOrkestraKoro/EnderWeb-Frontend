import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import RepertoirePage from "./components/RepertoirePage";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/repertoire" element={<RepertoirePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
