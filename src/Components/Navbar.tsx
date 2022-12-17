import { NavLink } from "react-router-dom";

const Navbar: React.FC<{ email: string }> = ({ email }) => {
  return (
    <div>
      {email ? `Bienvenido ${email}` : null}
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/create-book"}>Crear libro</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
        <li>
          <NavLink to={"/register"}>Registro</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
