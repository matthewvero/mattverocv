/** @format */

import "./App.css";
import React, { useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";
import { theme } from "./theme";
import { usePageChangeListener } from "./ui-custom-hooks";
import { useDispatch } from "react-redux";
import { setMainMenuVisible } from "./redux";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage";
import AboutMePage from "./pages/aboutme/about-me-page.component";
import EducationPage from "./pages/education/education-page.component";
import ProjectsPage from "./pages/projects/projects-page.component";

function App({ history }) {
	const dispatch = useDispatch();
	const appRef = useRef();


	const handlePageChange = (pathname) => {
		const pagename = pathname.split('/')[1];
		const page = document.getElementById(pagename);
		if(!pagename) {
			appRef.current.scrollTo({top: '0', behavior: 'smooth'});
		} else {
			appRef.current.scrollTo({top: page.offsetTop, behavior: 'smooth'});

		}

		dispatch(setMainMenuVisible(false));
	};
	// Check if page changes and close page.
	usePageChangeListener(history, handlePageChange);

	

	return (
		<div className="App" ref={appRef}>
			<ThemeProvider theme={theme}>
				<Header $appRef={appRef}/>	
				
				<Homepage/>
		
				<ProjectsPage/>

				<AboutMePage/>

				<EducationPage/>
			</ThemeProvider>
		</div>
	);
}

export default withRouter(App);
