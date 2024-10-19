import styled from 'styled-components';
export const StyledProductItemList = styled.div`
    flex: 3;

    .products {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;


      @media screen and (min-width: 680px) and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (max-width: 680px) {
        grid-template-columns: 1fr;
      }

    }
`;