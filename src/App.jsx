import { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Container, Flex, Link, Box } from "@radix-ui/themes";

import Login from "./pages/Login";
import Home from "./pages/Home";
import axios from "axios";
import Cookies from "js-cookie";

const App = () => {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/auth/google/success"
        );
        console.log("CurrentUser", response);
        const accessToken = Cookies.get("access_token");
        console.log("accessToken", accessToken);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <div>
      <nav className="border-b mb-5 px-5 py-3">
        <Box>
          <Flex justify="between">
            <Flex align="center" gap="3">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/login">Login</NavLink>
            </Flex>
          </Flex>
        </Box>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
