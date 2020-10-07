import React, { Suspense } from "react";

import { GlobalStyles } from "./global-styles";
import NotFound from "./components/NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

const Home = React.lazy(() => import("./pages/home"));
const Browse = React.lazy(() => import("./pages/browse"));
const Signin = React.lazy(() => import("./pages/signin"));
const Signup = React.lazy(() => import("./pages/signup"));

function App() {
	const user = null;

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<GlobalStyles />

			<Router>
				<Switch>
					<IsUserRedirect
						user={user}
						loggedInPath={ROUTES.BROWSE}
						path={ROUTES.SIGN_IN}
						exact
					>
						<Signin />
					</IsUserRedirect>
					<IsUserRedirect
						user={user}
						loggedInPath={ROUTES.BROWSE}
						path={ROUTES.SIGN_UP}
						exact
					>
						<Signup />
					</IsUserRedirect>
					<ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
						<Browse />
					</ProtectedRoute>
					<IsUserRedirect
						user={user}
						loggedInPath={ROUTES.BROWSE}
						path={ROUTES.HOME}
						exact
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
