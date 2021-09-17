/** @format */

import styled from 'styled-components/macro';
import { PageGrid } from '../page.styles';

export const ProjectsPageGrid = styled(PageGrid)`
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: auto;
      margin-top: 30px;
      width: 75%;
      @media (max-width: 1200px) {
            grid-template-columns: 1fr;
            place-items: center;
            width: 100%;
      }
`;
