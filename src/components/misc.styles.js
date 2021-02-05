import styled from 'styled-components';

export const HR = styled.hr`
      width: 70%;
      border: solid 1px ${props => props.header ? props.theme.main : '#333'};
`;