import React, { Suspense } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyles } from "./global-styles";
import * as ROUTES from "./constants/routes";
import NotFound from "./components/NotFound";
const Home = React.lazy(() => import("./pages/home"));
const Browse = React.lazy(() => import("./pages/browse"));
const Signin = React.lazy(() => import("./pages/signin"));
const Signup = React.lazy(() => import("./pages/signup"));

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<GlobalStyles />

			<Router>
				<Route exact path={ROUTES.HOME} component={Home} />
				<Route exact path={ROUTES.BROWSE} component={Browse} />
				<Route exact path={ROUTES.SIGN_IN} component={Signin} />
				<Route exact path={ROUTES.SIGN_UP} component={Signup} />
				<Route component={NotFound} />
			</Router>
		</Suspense>
	);
}

export default App;
