import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ComplaintForm from "./pages/ComplaintForm";
import ComplaintsList from "./pages/ComplaintsList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/complaint" element={<ComplaintForm />} />
      <Route path="/complaints" element={<ComplaintsList />} />
    </Routes>
  );
}

export default App;