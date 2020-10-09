import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";
import { GlobalStyles } from "./global-styles";
import { NotFound, Spinner } from "./components";
function App() {
	const { user } = useAuthListener();

	return (
		<Suspense fallback={<Spinner />}>
			<Router>
				<GlobalStyles />
				<Switch>
					<IsUserRedirect
						user={user}
						loggedInPath={ROUTES.BROWSE}
						path={ROUTES.SIGN_IN}
					>
						<SignIn />
					</IsUserRedirect>
					<IsUserRedirect
						user={user}
						loggedInPath={ROUTES.BROWSE}
						path={ROUTES.SIGN_UP}
					>
						<SignUp />
					</IsUserRedirect>
					<ProtectedRoute user={user} path={ROUTES.BROWSE}>
						<Browse />
					</ProtectedRoute>
					<IsUserRedirect
						user={user}
						loggedInPath={ROUTES.BROWSE}
						path={ROUTES.HOME}
					>
						<Home />
					</IsUserRedirect>
					<Route component={NotFound} />
				</Switch>
			</Router>
		</Suspense>
	);
}

export default App;
