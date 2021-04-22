/** @format */

import styled, { keyframes } from "styled-components";

export const ProjectCardContainer = styled.div`
	position: relative;
	width: 100%;
	height: 350px;
	display: flex;
	background-color: ${(props) => props.theme.surface};
	border-radius: ${(props) => props.theme.borderRadius};
`;

export const ProjectCardContentFader = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 20px;
	box-sizing: border-box;
	padding-bottom: 60px;
	border-radius: ${(props) => props.theme.borderRadius};
	&.project-enter {
		opacity: 0;
		transform: scale(0.8);
	}
	&.project-enter-active {
		transition: all 200ms ease-out;
		opacity: 1;
		transform: scale(1);
	}
	&.project-exit {
		opacity: 1;
		transform: scale(1);
	}
	&.project-exit-active {
		transition: all 100ms ease-out;
		opacity: 0;
		transform: scale(0.8);
	}
`;

export const ProjectCardBackground = styled(ProjectCardContentFader)`
	background-image: url(${(props) => props.$imageURL});
	background-position: center;
	background-size: cover;
`;

export const ProjectCardSideBar = styled.div`
	height: 100%;
	width: 150px;
	${(props) => (props.left ? "left: -148px;" : "right: -148px;")}
	color: white;
	position: absolute;
	background-color: ${(props) => props.theme.surface};
	z-index: 10;
	transform-origin: ${(props) => (props.left ? "right" : "left")};
	border-radius: ${(props) => props.theme.borderRadius};
	&.sidebar-enter {
		transform: scaleX(0);
	}
	&.sidebar-enter-active {
		transition: all 100ms 100ms ease-out;

		transform: scaleX(1);
	}
	&.sidebar-exit {
		transform: scaleX(1);
	}
	&.sidebar-exit-active {
		transform: scaleX(0);
	}
`;

const fadein = keyframes`
      0% {opacity: 0%;}
      100% {opacity: 100%;}
`;

export const ProjectCardSideBarContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	opacity: 0;
	animation: ${fadein} 100ms 250ms forwards 1;
	padding: 10px 0;
`;

export const TechCard = styled.div`
	height: auto;
	width: 80%;
	padding: 5px;
	background-color: ${(props) => props.theme.background};
	border-radius: 10px;
	display: grid;
	place-items: center;
	color: ${(props) => props.theme.main};
	margin-bottom: 10px;
`;
