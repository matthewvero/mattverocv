/** @format */

import styled from "styled-components/macro";
import { InlineIcon } from "@iconify/react";
const cardStyles = `
      width: 100%;
      height: auto;
      padding: 10px;
      box-sizing: border-box;
      display: flex; 
      flex-direction: column;
      align-items: center;
`;

export const TitleCard = styled.header`
	${cardStyles}
	justify-content: center;
	border-radius: ${(props) => props.theme.borderRadius};
	padding: 10px;
`;

export const InfoCard = styled.section`
	${cardStyles}
	border-radius: ${(props) => props.theme.borderRadius};
	width: 100%;
	height: 100%;
	padding: 10px 30px;
	grid-column: 1/3;
	display: grid;
	align-items: start;
	justify-items: center;
	background-color: ${(props) => props.theme.surface};
	gap: 0.5rem;
	align-content: start;
	position: relative;

	@media (min-width: 1000px) {
		grid-column: auto;
	}
`;

export const SkillCardIcon = styled(InlineIcon)`
	margin: 0 10px;
	color: ${(props) => props.theme.text};
	transition: transform 100ms ease;
`;

export const SkillCard = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-radius: ${(props) => props.theme.borderRadius};
	background-color: ${(props) => props.theme.surface};
	&:hover ${SkillCardIcon} {
		transform: scale(2);
	}
`;

export const SkillCardsContainer = styled.div`
	width: 100%;
	height: auto;
	margin-bottom: 20px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	@media (max-width: 650px) {
		grid-template-columns: 1fr;
	}
`;

