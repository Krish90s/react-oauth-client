import { Button } from "@radix-ui/themes";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div>
			<Link to="http://localhost:3000/api/v1/auth/google">
				<Button color="blue" variant="outline">
					Continue with Google
				</Button>
			</Link>
		</div>
	);
};

export default Login;
