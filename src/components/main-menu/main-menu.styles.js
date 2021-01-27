import styled from 'styled-components';

export const MainMenuContainer = styled.div`
      z-index: 9;
      position: fixed;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      padding-top: 100px;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      backdrop-filter: blur(40px);
      background-color: rgba(255,255,255, 0.5);

      @media (min-width: 1000px) {
            width: 40vw;
      }
      @media (min-width: 1300px) {
            width: 30vw;
      }

      &.mainmenu-enter {
		opacity: 0;
	}
	&.mainmenu-enter-active {
            transition: all 100ms ease-out;
		opacity: 1;
	}
	&.mainmenu-exit {
            opacity: 1;
	}
	&.mainmenu-exit-active {
            transition: all 100ms ease-out;
		opacity: 0;
      }
`;