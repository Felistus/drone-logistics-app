import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/global/NavigationBar";
import About from "./pages/about";
import Contact from "./pages/contact";
import FrequentQuestions from "./pages/frequent-questions";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faqs" element={<FrequentQuestions />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
