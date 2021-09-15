/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components/macro";

export const Button = styled.div`
	width: 50%;
	height: 50px;
	border: ${props => props.theme.border};
	border-radius: ${(props) => props.theme.borderRadius};
	transform: scale(
		${(props) => {
			if (props.$active) {
				return "0.95";
			} else if (props.$hovering) {
				return "0.99";
			} else {
				return 1;
			}
		}}
	);
	display: flex;
	justify-content: space-around;
	align-items: center;
	cursor: pointer;
	@media (max-width: 500px) {
		height: 35px;
	}
`;

export const IconButton = styled(FontAwesomeIcon)`
	color: ${(props) => props.theme.main};
	font-size: 2rem;
	transform: scale(
		${(props) => {
			if (props.$active) {
				return "1";
			} else if (props.$hovering) {
				return "1.1";
			} else return "1";
		}}
	);
	cursor: pointer;
`;
