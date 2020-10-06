import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function NotFound() {
	return (
		<div className="body">
			<div className="mainbox">
				<div className="err">
					<p>404</p>
				</div>

				<div className="msg">
					Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
					existed in the first place?
					<p>
						Let's go{" "}
						<Link to="/" className="a">
							home
						</Link>{" "}
						and try from there.
					</p>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
