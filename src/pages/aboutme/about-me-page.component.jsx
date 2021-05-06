/** @format */

import React, { useContext } from "react";
import { ThemeContext } from "styled-components/macro";
import { InfoCard, TitleCard } from "../../components/containers.styles";
import { HR } from "../../components/misc.styles";
import { SubTitle, Text, Title } from "../../components/text.styles";
import { Page } from "../page.styles";
import { AboutMePageGrid } from "./about-me-page.styles";

const AboutMePage = ({ $ref }) => {
	const theme = useContext(ThemeContext);

	return (
		<Page ref={$ref}>
			<AboutMePageGrid>
				<TitleCard style={{ gridColumn: "1/3", order: "1" }}>
					<Title>About Me</Title>
				</TitleCard>
				<InfoCard style={{ order: 2 }}>
					<SubTitle style={{ color: theme.main }}>
						Introduction
					</SubTitle>
					<HR $header />

					<Text style={{ marginBottom: "10px" }}>
						I'm Matt Vero, a self taught front end
						developer motivated by a passion for
						learning, fast-paced work and asking lots of
						questions.
					</Text>
					<Text style={{ marginBottom: "10px" }}>
						I really enjoy working amongst a team and
						love solving problems in dynamic
						environments, especially when surrounded by
						supportive, like-minded team members.
					</Text>
				</InfoCard>
				<InfoCard style={{ order: "3" }}>
					<SubTitle style={{ color: theme.main }}>
						Goals
					</SubTitle>
					<HR $header />

					<Text>
						Become a crucial and valued member of a
						team.
					</Text>
					<HR style={{ width: "40%" }} />

					<Text>Be known as an expert in my field.</Text>
					<HR style={{ width: "40%" }} />

					<Text>Learn from the best.</Text>
					<HR style={{ width: "40%" }} />

					<Text>
						Create work my team and I can be proud of.
					</Text>
					<HR style={{ width: "40%" }} />
				</InfoCard>
				<InfoCard style={{ order: "4", gridColumn: "1/3" }}>
					<SubTitle style={{ color: theme.main }}>
						Personal Time
					</SubTitle>
					<HR $header />
					<Text style={{ marginBottom: "10px" }}>
						When I'm not working on becoming the *best
						front end developer ever*
						<br />
						I'm usually engrossed in one of my hobbies!
					</Text>
					<Text style={{ marginBottom: "10px" }}>
						3D printing, gaming (tabletop / video),
						trying to grow plants etc.
						<br />
						Usually whichever takes my fancy in the
						moment.
					</Text>
				</InfoCard>
			</AboutMePageGrid>
		</Page>
	);
};

export default AboutMePage;
