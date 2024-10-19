import styled from 'styled-components';
export const StyledCartContainer = styled.div`
    width: 100%;
    height: fit-content;
    max-width: 650px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    margin-left: 30px;
    padding: 20px;
    border-radius: 10px;

    @media screen and (min-width: 680px) and (max-width: 1240px) {
      padding: 30px 50px;
    }

    @media screen and (max-width: 1240px) {
      margin-top: 80px;
      margin-left: unset;
    }
`;