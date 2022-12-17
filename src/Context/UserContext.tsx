import React, { useContext, useEffect, useState } from "react";

const UserContext = React.createContext({
  firstName: "",
  lastName: "",
  email: "",
  token: "",
  handleSetValues: (key: string, value: string) => {},
});

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    token: localStorage.getItem("token") ?? "",
  });
  const handleSetValues = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    if (values.token) {
      fetch("http://localhost:3000/api/me", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${values.token}`,
        },
      }).then((response) => {
        response.json().then((jsonResponse) => {
          handleSetValues("email", jsonResponse.email);
        });
      });
    }
  }, [values.token]);

  return (
    <UserContext.Provider value={{ ...values, handleSetValues }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
