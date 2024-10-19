import styled from 'styled-components';
export const StyledProductItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 300px;

    & > img:first-child {
      box-shadow: 0 1px 4px -1px #0000003b;
    }
`;