import React, { Suspense } from "react";

import { GlobalStyles } from "./global-styles";
import NotFound from "./components/NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect } from "./helpers/routes";

const Home = React.lazy(() => import("./pages/home"));
const Browse = React.lazy(() => import("./pages/browse"));
const Signin = React.lazy(() => import("./pages/signin"));
const Signup = React.lazy(() => import("./pages/signup"));

function App() {
	const user = {};

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
					<Route exact path={ROUTES.HOME} component={Home} />
					<Route exact path={ROUTES.BROWSE} component={Browse} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</Suspense>
	);
}

export default App;
