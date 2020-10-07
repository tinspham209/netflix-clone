import React, { useState, useContext } from "react";

import { FirebaseContext } from "../context/firebase";

import { Form } from "../components";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";

import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";

const Signup = () => {
	const { firebase } = useContext(FirebaseContext);

	const [firstName, setFirstName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const history = useHistory();

	const isInvalid = firstName === "" || password === "" || emailAddress === "";

	const handleSignup = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignup} method="POST">
						<Form.Input
							placeholder="First name"
							value={firstName}
							onChange={({ target }) => setFirstName(target.value)}
						/>

						<Form.Input
							placeholder="Email address"
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							type="password"
							placeholder="Password"
							autoComplete="off"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Sign Up
						</Form.Submit>
					</Form.Base>
					<Form.Text>
						Already a user?
						<Form.Link to={ROUTES.SIGN_IN}> Sign in now.</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot. Learn more.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
};

export default Signup;
