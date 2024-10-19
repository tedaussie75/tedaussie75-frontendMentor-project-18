import styled from 'styled-components';

export const StyledCartResume = styled.div`
    width: 100%;

    & > p {
        font-size: 12px;
        color: var(--rose-500);
        &.total {
            padding: 20px 0;
            span {
                width: 100%;
                display: flex;
                justify-content: space-between;

                & strong {
                    font-size: 18px;
                    color: var(--rose-900);
                }
            }
        }
    }

    .neutralCarbonResume {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 10px;
        background-color: var(--rose-100);
        border-radius: 10px;

        & p {
            font-size: 12px;
            margin-left: 5px;
        }

        & img {
            height: 100%;
        }
    }
`;