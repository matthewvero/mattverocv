/** @format */

import styled from "styled-components/macro";

export const Page = styled.div`
	height: auto;
	width: 100%;
	display: grid;
	padding: 20px;
	padding-bottom: 40px;
	padding-top: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	box-sizing: border-box;
	&.page-enter {
		opacity: 0;
	}
	&.page-enter-active {
		position: absolute;
		transition: opacity 100ms 100ms;
		opacity: 1;
	}
	&.page-exit {
		opacity: 1;
	}
	&.page-exit-active {
		position: absolute;
		transition: opacity 100ms;
		opacity: 0;
	}
`;

export const PageGrid = styled.section`
	height: auto;
	width: 70%;
	display: grid;
	box-sizing: border-box;
	gap: 1rem;
	margin-bottom: 20px;
	@media (max-width: 1200px) {
		width: 100%;
	}
`;
export const PageShifter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 100px;
	transition: transform 100ms;
	transform: translateY(${(props) => (props.$shift ? "100px" : "0")});
`;
