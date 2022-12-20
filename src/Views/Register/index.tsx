import { useState } from "react";
import { useUserContext } from "../../Context/UserContext";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const { handleSetValues } = useUserContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/auth/register", {
      body: JSON.stringify(form),
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => {
      response.json().then((jsonResponse) => {
        handleSetValues("token", jsonResponse.payload.token);
        localStorage.setItem("token", jsonResponse.payload.token);
      });
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setForm((prev) => ({ ...prev, email: e.target.value }));
          }}
          type={"text"}
        />
        <input
          onChange={(e) => {
            setForm((prev) => ({ ...prev, password: e.target.value }));
          }}
          type={"password"}
        />
        <input
          onChange={(e) => {
            setForm((prev) => ({ ...prev, password: e.target.value }));
          }}
          type={"repeatPassword"}
        />
        <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
};

export default Register;
