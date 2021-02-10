import styled, { keyframes } from 'styled-components/macro';

export const MainMenuShell = styled.div`
      height: 50px;
      display: none;
      @media (max-width: 1000px) {
            display: block;
      }
`;

export const MainMenuButton = styled.div`
      z-index: 10;
      height: 50px;
      width: 50px;
      border-radius: ${props => props.theme.borderRadius};
      box-sizing: border-box;
      justify-content: center;
      align-items: center;
      border: 3px solid ${props => props.theme.main};
      cursor: pointer;
      transform: scale(${props => props.$active ? '0.98' : '1'});
      transition: transform 100ms ease-in;
      user-select: none;
      display: flex;
`

export const MainMenuContainer = styled.div`
      z-index: 9;
      position: fixed;
      top: 100px;
      right: 0%;
      width: 500px;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      background-color: ${props => props.theme.surface};
      box-shadow: inset 0 0 10px #111111;
      &.mainmenu-enter {
		transform: translateX(100%);
	}
	&.mainmenu-enter-active {
            transition: all 150ms cubic-bezier(1,.33,1,.66);
		transform: translateX(0%);
	}
	&.mainmenu-exit {
            transform: translateX(0%);
	}
	&.mainmenu-exit-active {
            transition: all 150ms cubic-bezier(1,.33,1,.66) 75ms;
		transform: translateX(100%);
      }

      @media (max-width: 500px) {
            width: 100vw;
      }
`;

const fade = keyframes`
 0% { opacity: 0%; }
 100% { opacity: 100%; }
`


export const MainMenuSlide = styled.div`
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      /* animation: ${fade} 200ms linear 200ms 1 forwards; */
      padding: 10px;
      

      &.mainmenuslide-enter {
		opacity: 0;
	}
	&.mainmenuslide-enter-active {
            transition: all 200ms ease-out; 
            opacity: 1;
	}
	&.mainmenuslide-exit {
            opacity: 1;
	}
	&.mainmenuslide-exit-active {
            transition: all 50ms ease-out; 
		opacity: 0;
      }
`

export const MainMenuItem = styled.div`
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;
      transform: scale(${props => props.$active ? '0.95' : '1'});
`