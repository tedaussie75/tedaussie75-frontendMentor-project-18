
import styled from 'styled-components';

export const StyledCartItem = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0;

    &.cartItem {
        justify-content: space-between;
        border-bottom: 1px solid var(--rose-100);

        & img {
            padding: 2px;
            border: 1px solid var(--rose-300);
            cursor: pointer;
        }
    }

    &.orderItem {
        border-bottom: 1px solid var(--rose-100);
        padding: 20px 0;
        margin: 0 20px;
        & img {
            width: 50px;
            border-radius: 5px;
            margin-right: 15px;
            cursor: pointer;
        }
    }

    .itemInfos {
        width: 100%;
    }
`;

export const StyledCartItemInfos = styled.div`
    p:last-child {
        div {
            margin-top: 5px;
            strong {
                font-size: 14px;
                color: var(--red);
            }

            span {
                font-size: 14px;
                color: var(--rose-500);
            }

            span:first-of-type {
                margin-left: 10px;
            }

            span:last-of-type {
                margin-left: 5px;
                font-weight: bold;
            }
        }
    }
`;
