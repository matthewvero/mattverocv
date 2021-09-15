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
		<Page ref={$ref} id='projects' >
		
		
			<TitleCard>
				<Title style={{ marginBottom: "20px" }}>
					My Projects
				</Title>
				<HR />
				<SubTitle>
					Check out the Readme documents on github for a
					detailed break down!
				</SubTitle>
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
						$imageURL="https://printrat.sirv.com/cv/Screenshot%202021-05-14%20at%2016.14.18.png?cy=2&ch=1378"
						$githubUrl="https://github.com/matthewvero/mattverocv"
						$technologies={[
							"ReactJS",
							"Styled-Components",
						]}
						$left
					>
						<React.Fragment>
							<SubTitle
								
							>
								mattvero.com
							</SubTitle>
							<HR style={{ margin: "10px" }} />
							<Text>
								This website! This is a fun
								project that I'm continually
								improving and adding to. Now to
								add some images.
							</Text>
							<Text>
								I really enjoyed developing in
								my own style, the project cards
								were fun exercise in showing
								information in a dense format,
								although I think there are still
								improvements to be made.
							</Text>
						</React.Fragment>
					</ProjectCardTouch>
				</ProjectsPageGrid>
			</TitleCard>
			
		</Page>
	);
};

export default ProjectsPage;
