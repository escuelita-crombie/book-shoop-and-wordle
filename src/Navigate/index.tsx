import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import PrivateRoute from "./PrivateRoute";
import { useUserContext } from "../Context/UserContext";
import Login from "../Views/Login";
import Wordle from "../Views/Wordle";
import Register from "../Views/Register";

const Navigate = () => {
  const { email } = useUserContext();
  return (
    <BrowserRouter>
      <Navbar email={email} />
      <Routes>
        <Route path="/" element={<Wordle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/re<gister" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/create-book" element={<>Entraste :)</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigate;
