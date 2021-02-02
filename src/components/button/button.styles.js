import styled from 'styled-components';

export const ButtonContainer = styled.div`
      width: 50%;
      height: 50px;
      border: 2px solid ${props => props.theme.main};
      border-radius: ${props => props.theme.borderRadius};
      color: ${props => props.theme.main};
      transform: scale(${props => props.active ? '0.98' : '1'});
      display: flex;
      justify-content: space-around;
      align-items: center;
      transition: transform 100ms linear;
      cursor: pointer;
`;    