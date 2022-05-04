import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function Logout() {
  const { logout } = useAuth();
  useEffect(() => {
    const handleLogout = async () => {
      await logout();
    };

    handleLogout();

    window.location = "/";
  }, []);
  return null;
}

export default Logout;
