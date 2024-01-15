import { Button } from "@radix-ui/themes";
import React from "react";
import { Link } from "react-router-dom";
import { Grid, Flex, Box } from "@radix-ui/themes";

const Login = () => {
  const handleGoogleLogin = () => {
    window.open("http://localhost:3000/api/v1/auth/google", "_self");
  };
  return (
    <Box height="100%" className="px-5">
      {/* <Link to="http://localhost:3000/api/v1/auth/google">
        <Button color="blue" variant="outline">
          Continue with Google
        </Button>
      </Link> */}
      <Button color="blue" variant="outline" onClick={handleGoogleLogin}>
        Continue with Google
      </Button>
    </Box>
  );
};

export default Login;
