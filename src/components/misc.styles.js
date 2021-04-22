/** @format */

import styled from "styled-components/macro";

export const HR = styled.hr`
	width: ${(props) => (props.$header ? "70%" : "40%")};
	border: solid 1px
		${(props) => (props.$header ? props.theme.main : "#333")};
	margin: 0px auto;
	margin-bottom: 10px;
`;

export const WebLink = styled.a`
	color: ${(props) => props.theme.main};
	text-decoration: none;
	&:visited {
		color: #ff56a2;
	}
`;
