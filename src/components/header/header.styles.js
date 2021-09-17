/** @format */

import styled from 'styled-components/macro';

export const HeaderContainer = styled.header`
      z-index: 11;
      position: fixed;
      width: 100%;
      top: 0px;
      left: 0px;
      height: 100px;
      padding: 20px 15%;
      display: flex;
      box-sizing: border-box;
      justify-items: center;
      align-items: center;
      border-radius: ${(props) =>
            props.$popped ? props.theme.borderRadius : '0'};
      @media (min-width: 1000px) {
            transition: transform
                  ${(props) => (props.$transition ? '200ms' : '0ms')};
            transform: translateY(${(props) => (props.$popped ? '10px' : '0')});
      }

      @media (max-width: 1000px) {
            padding: 30px 15px;
            display: flex;
            justify-content: flex-end;
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
            transform: scale(${(props) => (props.$contactVisible ? '2' : '1')});
            @media (min-width: 1000px) {
                  border-radius: ${(props) =>
                        props.$popped ? props.theme.borderRadius : '0'};
                  transform: scale(
                        ${(props) => (props.$popped ? '0.9' : '1')},
                        ${(props) => (props.$contactVisible ? '2' : '1')}
                  );
            }
            transform-origin: top;
            backdrop-filter: blur(20px);

            will-change: transform;
            box-shadow: 0 0 5px 1px ${(props) => props.theme.background};
      }
`;

export const HeaderLink = styled.div`
      height: 100%;
      min-width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transform: scale(${(props) => (props.$active ? '0.95' : '1')});
      transition: transform 50ms ease-out;
      position: relative;
      color: white;
      font-size: 1.3rem;
      color: ${(props) => props.theme.subText};
      font-weight: 400;
      margin: 0;
      @media (max-width: 1000px) {
            display: none;
      }
      &:after {
            content: ' ';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 70%;
            transform: translateX(-50%);
            border-bottom: 3px
                  ${(props) =>
                        props.$open ? props.theme.charcoal : 'transparent'}
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

export const MobileContactButton = styled.div`
      display: none;
      width: 100px;
      height: 40px;
      border-radius: 50px;
      align-items: center;
      justify-content: center;
      transform: scale(${(props) => (props.$active ? '0.95' : '1')});
      cursor: pointer;
      @media (max-width: 1000px) {
            display: flex;
      }
`;
