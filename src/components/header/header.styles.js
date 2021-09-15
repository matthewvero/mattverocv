/** @format */

import styled from "styled-components/macro";
import { ReactComponent as LOGO } from "../../MAVLOGO.svg";
export const MAVLOGO = styled(LOGO)`
	height: 100%;
	width: 100px;
	cursor: pointer;
	grid-column: 2/3;

	@media (max-width: 1000px) {
		width: 70px;
	}
	transform: scale(
		${(props) => {
			if (props.$active) {
				return "0.9";
			} else if (props.$hovering) {
				return "0.95";
			} else {
				return "1";
			}
		}}
	);
	transition: all 100ms ease-out;
	filter: drop-shadow(10px);
`;

export const HeaderContainer = styled.header`
	z-index: 11;
	position: fixed;
	width: 100%;
	top: 0px;
	left: 0px;
	height: 100px;
	padding: 20px 15%;
	display: grid;
	grid-template-columns: 2fr 1fr 2fr;
	box-sizing: border-box;
	justify-items: center;
	
	border-radius: ${(props) =>
		props.$popped ? props.theme.borderRadius : "0"};
	transition: transform ${(props) => (props.$transition ? "200ms" : "0ms")};
	transform: translateY(${(props) => (props.$popped ? "10px" : "0")});
	
	@media (max-width: 1000px) {
		padding: 30px 15px;
		display: flex;
		justify-content: space-between;
		width: 100vw;
		left: 0;
		transform: translateY(0);
		border-radius: 0;
	}
	&:before {
		content: ' ';
		z-index: 0;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: ${(props) => props.theme.headerSurface};
		transition: transform 100ms linear;
		transform: scale(${props => props.$popped ? '0.9' : '1'}, ${props => props.$contactVisible ? '2' : '1'});
		transform-origin: top;
		backdrop-filter: blur(20px);
		border-radius: ${(props) =>
		props.$popped ? props.theme.borderRadius : "0"};
		will-change: transform;
	}
`;

export const HeaderLink = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transform: scale(${(props) => (props.$active ? "0.95" : "1")});
	transition: transform 50ms ease-out;
	position: relative;

	&:after {
		content: " ";
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 70%;
		transform: translateX(-50%);
		border-bottom: 3px
			${(props) => (props.$open ? props.theme.main : "transparent")}
			solid;
	}
`;



export const HeaderPageIndicator = styled.div`
	position: absolute;
	bottom: 10%;
	left: 50%;
	height: 2px;
	width: 80%;
	background-color: ${(props) => props.theme.main};
`;

export const HeaderNav = styled.nav`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: ${(props) => (props.right ? "flex-start" : "flex-end")};
	@media (max-width: 1000px) {
		display: none;
	}
`;

export const MobileContactButton = styled.div`
	display: none;
	width: 100px;
	height: 40px;
	border-radius: 50px;
	align-items: center;
	justify-content: center;
	transform: scale(${(props) => (props.$active ? "0.95" : "1")});
	cursor: pointer;
	@media (max-width: 1000px) {
		display: flex;
	}
`;
