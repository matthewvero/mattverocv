/** @format */

import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import {
	ProjectCardBackground,
	ProjectCardContainer,
	ProjectCardContentFader,
	ProjectCardSideBar,
	ProjectCardSideBarContent,
	SkillsShiftButton,
	TechCard,
} from "./project-card.styles";

import { Button, IconButton } from "../button.styles.js";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Text } from "../text.styles";
import withTouchAnimator from "../../HOCs/with-touch-animator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({
	$hovering,
	$imageURL,
	children,
	$technologies,
	$githubUrl,
	$liveUrl,
	$left,
	...props
}) => {
	const [shift, setShift] = useState(false);
	const faderRef = useRef(null);
	const backgroundRef = useRef(null);
	const sidebarRef = useRef(null);
	const IconButtonTouch = withTouchAnimator(IconButton);
	const ButtonTouch = withTouchAnimator(Button);
	const handleLiveClick = () => {
		window.open($liveUrl, "_blank");
	};

	const handleGithubClick = () => {
		window.open($githubUrl, "_blank");
	};

	useEffect(() => {
		if ($hovering === false) {
			setShift(false);
		}
	}, [$hovering]);

	return (
		<React.Fragment>
			<ProjectCardContainer {...props} $shift={shift}>
				<CSSTransition
					in={$hovering === false}
					classNames="project"
					timeout={300}
					unmountOnExit
					nodeRef={backgroundRef}
				>
					<ProjectCardBackground
						ref={backgroundRef}
						$imageURL={$imageURL}
					/>
				</CSSTransition>
				<CSSTransition
					in={$hovering === true}
					classNames="project"
					timeout={300}
					unmountOnExit
					nodeRef={faderRef}
				>
					<ProjectCardContentFader ref={faderRef}>
						{children}
						<div
							style={{
								position: "absolute",
								bottom: "5px",
								display: "flex",
								height: "50px",
								width: "50%",
								justifyContent: "space-around",
								alignItems: "center",
							}}
						>
							<IconButtonTouch
								icon={faGithub}
								fn={handleGithubClick}
							/>
							<ButtonTouch
								style={{
									maxHeight: "75%",
									width: "50%",
									padding: "0 10px",
								}}
								fn={handleLiveClick}
							>
								<Text>Live Site</Text>
							</ButtonTouch>
						</div>
						<SkillsShiftButton
							onPointerDown={() =>
								setShift((shift) => !shift)
							}
						>
							{shift ? (
								<FontAwesomeIcon
									icon={faTimes}
									style={{
										color: "crimson",
									}}
								/>
							) : (
								<FontAwesomeIcon
									icon={faChevronRight}
								/>
							)}
						</SkillsShiftButton>
					</ProjectCardContentFader>
				</CSSTransition>
				<CSSTransition
					in={$technologies && $hovering === true}
					classNames="sidebar"
					timeout={200}
					unmountOnExit
					nodeRef={sidebarRef}
				>
					<ProjectCardSideBar
						$left={$left}
						$shift={shift}
						ref={sidebarRef}
					>
						<ProjectCardSideBarContent>
							{$technologies &&
								$technologies.map((el, idx) => (
									<TechCard key={idx}>
										{el}
									</TechCard>
								))}
						</ProjectCardSideBarContent>
					</ProjectCardSideBar>
				</CSSTransition>
			</ProjectCardContainer>
		</React.Fragment>
	);
};

export default ProjectCard;
