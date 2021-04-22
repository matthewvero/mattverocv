/** @format */

import "./App.css";
import React from "react";
import Header from "./components/header/header.component";
import { Route, withRouter } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import { ThemeProvider } from "styled-components/macro";
import { theme } from "./theme";
import AboutMePage from "./pages/aboutme/about-me-page.component";
import { usePageChangeListener } from "./ui-custom-hooks";
import { useDispatch, useSelector } from "react-redux";
import { setMainMenuVisible } from "./redux";
import { CSSTransition } from "react-transition-group";
import EducationPage from "./pages/education/education-page.component";
import { PageShifter } from "./pages/page.styles";
import ProjectsPage from "./pages/projects/projects-page.component";
function App({ history, match }) {
	const dispatch = useDispatch();
	const routes = {
		home: "/",
		about: "/about",
		education: "/education",
		projects: "/projects",
	};
	const refs = {
		[routes.home]: React.createRef(null),
		[routes.about]: React.createRef(null),
		[routes.education]: React.createRef(null),
		[routes.projects]: React.createRef(null),
	};

	const handlePageChange = () => {
		window.scrollTo(0, 0);
		dispatch(setMainMenuVisible(false));
	};
	// Check if page changes and reset scroll.
	usePageChangeListener(history, handlePageChange);
	const contactVisible = useSelector(
		(state) => state.contactDetails.visible
	);

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Header />

				<PageShifter $shift={contactVisible}>
					<Route exact path={routes.home}>
						{({ match }) => (
							<CSSTransition
								in={match != null}
								timeout={600}
								classNames="page"
								unmountOnExit
								nodeRef={refs[routes.home]}
							>
								<Homepage
									$ref={refs[routes.home]}
								/>
							</CSSTransition>
						)}
					</Route>

					<Route exact path={routes.about}>
						{({ match }) => (
							<CSSTransition
								in={match != null}
								timeout={450}
								classNames="page"
								unmountOnExit
								nodeRef={refs[routes.about]}
							>
								<AboutMePage
									$ref={refs[routes.about]}
								/>
							</CSSTransition>
						)}
					</Route>

					<Route exact path={routes.education}>
						{({ match }) => (
							<CSSTransition
								in={match != null}
								timeout={450}
								classNames="page"
								unmountOnExit
								nodeRef={refs[routes.education]}
							>
								<EducationPage
									$ref={
										refs[
											routes
												.education
										]
									}
								/>
							</CSSTransition>
						)}
					</Route>

					<Route exact path={routes.projects}>
						{({ match }) => (
							<CSSTransition
								in={match != null}
								timeout={450}
								classNames="page"
								unmountOnExit
								nodeRef={refs[routes.projects]}
							>
								<ProjectsPage
									$ref={
										refs[
											routes
												.projects
										]
									}
								/>
							</CSSTransition>
						)}
					</Route>
				</PageShifter>
			</ThemeProvider>
		</div>
	);
}

export default withRouter(App);
