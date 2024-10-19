import styled from 'styled-components';
export const StyledConfirmModal = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.5);
`;

export const StyledConfirmContent = styled.div`
    width: 450px;
    background-color: var(--white);
    padding: 30px 25px;
    border-radius: 10px;

    .orderResume {
      background-color: var(--rose-50);
      border-radius: 10px;

      .itemInfos p:last-of-type div {
        display: flex;
        margin-top: 10px;
      }

      .orderItem span:last-of-type {
        margin-left: auto;
      }
    }

    .total {
      padding: 20px;
      border-radius: 10px;
      span {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          color: var(--rose-500);

          & strong {
              font-size: 24px;
              color: var(--rose-900);
          }
      }
    }
`;