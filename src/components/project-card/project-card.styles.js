/** @format */

import styled, { keyframes } from "styled-components";

export const ProjectCardContainer = styled.div`
	position: relative;
	width: 100%;
	height: 350px;
	display: flex;
	background-color: ${(props) => props.theme.surface};
	border-radius: ${(props) => props.theme.borderRadius};
	/* @media (max-width: 1200px) {
		width: 70%;
	} */
	@media (max-width: 950px) {
		width: 100%;
		transform: translateX(
			${(props) => (props.$shift ? "-150px" : "0")}
		);
		transition: transform 100ms ease;
	}
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
	color: white;
	position: absolute;
	background-color: ${(props) => props.theme.surface};
	z-index: 10;
	transform-origin: ${(props) => (props.$left ? "right" : "left")};
	border-radius: ${(props) => props.theme.borderRadius};
	&.sidebar-enter {
		transform: scaleX(0) scaleY(1);
	}
	&.sidebar-enter-active {
		transition: all 100ms 100ms ease-out;

		transform: scaleX(1) scaleY(1);
	}
	&.sidebar-exit {
		transform: scaleX(1) scaleY(1);
	}
	&.sidebar-exit-active {
		transform: scaleX(0) scaleY(1);
	}
	@media (max-width: 950px) {
		right: -148px;
		transition: opacity 50ms linear;
		opacity: ${(props) => (props.$shift ? "1" : "0")};
		&:after {
			display: ${(props) => (props.$shift ? "block" : "none")};
			content: " ";
			height: 100%;
			width: 1000px;
			background-color: rgba(10, 10, 10, 0.5);
			z-index: 100;
			position: absolute;
			top: 0;
			left: -1000px;
		}
	}
	@media (min-width: 950px) {
		${(props) => (props.$left ? "left: -148px;" : "right: -148px;")}
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

export const SkillsShiftButton = styled.div`
	display: none;
	position: absolute;
	bottom: 50%;
	right: 5%;
	color: ${(props) => props.theme.main};
	height: 20px;
	width: auto;
	z-index: 1000;
	cursor: pointer;
	transform: translateY(50%);
	font-size: 1.2rem;
	transition: all 50ms linear;
	padding: 20px;
	@media (max-width: 950px) {
		display: block;
	}
`;
