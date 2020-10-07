import React from "react";
import BrowseContainer from "../containers/browse";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";
const Browse = () => {
	const { series } = useContent("series");
	const { films } = useContent("films");

	const slides = selectionFilter({ series, films });
	console.log("slides", slides);

	return (
		<div>
			<BrowseContainer slides={slides} />
		</div>
	);
};

export default Browse;
