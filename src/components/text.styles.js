import styled from 'styled-components';

export const Title = styled.h1`
      font-size: 2rem;
      color: white;
`;

export const SubTitle = styled.h2`
      font-size: 1.5rem;
      color: white;
      font-weight: 400;
      margin: 0;
`

export const Text = styled.p`
      font-size: 1.3rem;
      color: ${props => props.$hovering || props.$active ? props.theme.main : '#333333'};
      font-weight: 400;
      margin: 0;
      transition: all 300ms ease-out;

`