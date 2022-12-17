import ReactDOM from "react-dom/client";
import UserProvider from "./Context/UserContext";
import "./index.css";
import Navigate from "./Navigate";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <UserProvider>
      <Navigate />
    </UserProvider>
  </>
);
