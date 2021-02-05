import styled, { keyframes } from 'styled-components/macro';

export const Page = styled.div`
      height: 100vh;
      width: 100%;
      display: grid; 
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      box-sizing: border-box;
      overflow: scroll;
      &.page-enter {
            filter: blur(5px);
            opacity: 0;
	}
	&.page-enter-active {
            position: absolute;
            transition: opacity 200ms 100ms, filter 100ms ease 200ms;
            opacity: 1;
            filter: blur(0px);
	}
	&.page-exit {
            opacity: 1;
            filter: blur(0px);
	}
	&.page-exit-active {
            position: absolute;
            transition: filter 100ms, opacity 200ms ease 50ms;
            filter: blur(5px);
            opacity: 0;
      }
`;

export const PageGrid = styled.div`
      height: auto;
      width: 100%;
      display: grid;
      box-sizing: border-box;
      gap: 1rem;
      @media (min-width: 1000px) {
            width: 70%;
      }
`;
