import styled from 'styled-components/macro';

export const HR = styled.hr`
      width: 200px;
      border: solid 1px ${props => props.header ? props.theme.main : '#333'};
      margin: 0px auto;
`;

export const WebLink = styled.a`
      color: ${props => props.theme.main};
      text-decoration: none;
      &:visited {
            color: #ff56a2;
      }
`