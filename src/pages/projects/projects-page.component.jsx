/** @format */

import React, { useContext } from "react";
import { TitleCard } from "../../components/containers.styles";
import { Page } from "../page.styles";
import { SubTitle, Text, Title } from "../../components/text.styles.js";
import { ProjectsPageGrid } from "./projects-page.styles";
import ProjectCard from "../../components/project-card/project-card.component";
import withTouchAnimator from "../../HOCs/with-touch-animator";
import { ThemeContext } from "styled-components";
import { HR } from "../../components/misc.styles.js";
const ProjectsPage = ({ $ref }) => {
	const ProjectCardTouch = withTouchAnimator(ProjectCard);
	const theme = useContext(ThemeContext);
	return (
		<Page ref={$ref}>
			<TitleCard>
				<Title>My Projects</Title>
				<ProjectsPageGrid>
					<ProjectCardTouch
						$imageURL="https://printrat.sirv.com/cv/Screenshot%202021-04-22%20at%2023.48.02.png"
						$githubUrl="https://github.com/matthewvero/netflix-clone"
						$liveUrl="https://netflix-clone-978d0.web.app"
						$technologies={[
							"ReactJS",
							"Firebase",
							"Styled-Components",
						]}
						$left
					>
						<React.Fragment>
							<SubTitle
								style={{ color: theme.main }}
							>
								Netflix Clone
							</SubTitle>
							<HR style={{ margin: "10px" }} />
							<Text>
								WIP. This will be a clone of the
								Netflix interface. I'll make use
								of APIs to populate the films
								and Firebase to authenticate
								users.
							</Text>
						</React.Fragment>
					</ProjectCardTouch>
					<ProjectCardTouch
						$imageURL="https://printrat.sirv.com/cv/Screenshot%202021-02-19%20at%2016.46.06.png"
						$githubUrl="https://github.com/matthewvero/yelp-camp-react"
						$liveUrl="https://yelpcamp-d57d1.web.app/"
						$technologies={[
							"ReactJS",
							"Firebase",
							"Styled-Components",
						]}
					>
						<React.Fragment>
							<SubTitle
								style={{ color: theme.main }}
							>
								YelpCamp
							</SubTitle>
							<HR style={{ margin: "10px" }} />
							<Text>
								This is a project I built with
								React, styled-components and
								Firebase. Think airbnb but for
								camps.
							</Text>
							<Text>
								What I like: I really enjoyed
								making
							</Text>
						</React.Fragment>
					</ProjectCardTouch>

					<ProjectCardTouch
						$imageURL="https://printrat.sirv.com/cv/Screenshot%202021-02-10%20at%2022.41.03.png"
						$githubUrl="https://github.com/matthewvero/fox-garage"
						$liveUrl="https://foxgarage.herokuapp.com/"
						$technologies={[
							"ReactJS",
							"Styled-Components",
						]}
						$left
					>
						<React.Fragment>
							<SubTitle
								style={{ color: theme.main }}
							>
								Fox Garage website proof of
								concept
							</SubTitle>
							<HR style={{ margin: "10px" }} />
							<Text>
								My first major React project,
								This was a proof of concept for
								a replacement website. I really
								enjoyed this one and learnt a
								lot about React doing it.
							</Text>
							<Text>
								This is largely none functional
								as it was a mock up.
							</Text>
						</React.Fragment>
					</ProjectCardTouch>
				</ProjectsPageGrid>
			</TitleCard>
		</Page>
	);
};

export default ProjectsPage;
