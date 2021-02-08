import styled from 'styled-components';

export const Button = styled.div`
      width: 50%;
      height: 50px;
      border: 2px solid ${props => props.theme.main};
      border-radius: ${props => props.theme.borderRadius};
      transform: scale(${props => {
            if (props.$active) {
                  return '0.98';
            } else if (props.$hovering) {
                  return '0.99'; 
            } else {
                  return 1;
            }
      }}) ;
      display: flex;
      justify-content: space-around;
      align-items: center;
      transition: transform 100ms linear;
      cursor: pointer;
`;    