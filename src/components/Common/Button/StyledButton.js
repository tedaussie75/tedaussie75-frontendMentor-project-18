import styled from 'styled-components';

export const CartButton = styled.button`
    display: flex;
    align-items: center;
    align-self: center;
    width: 150px;
    height: 40px;
    border: 1px solid var(--rose-300);
    border-radius: 30px;
    cursor: pointer;
    padding: 10px 20px;
    background-color: var(--white);
    margin: ${(props) => props.margin};
    transform: ${(props) => props.transform};

    & span {
        color: var(--rose-700);
        font-weight: 600;
    }

    & img {
        object-fit: cover;
        margin-right: 5px;
    }
`;

export const SelectableButton = styled(CartButton)`
    color: var(--white);
    background-color: var(--red);
    border-color: var(--red);
    justify-content: space-between;
    cursor: default;

    & span {
        color: var(--white);
        font-weight: unset;
    }

    & img {
        padding: 3px;
        height: 16px;
        width: 16px;
        object-fit: contain;
        cursor: pointer;
        border: 1px solid var(--white);
        border-radius: 50%;
    }
`;

export const DefaultButton = styled(SelectableButton)`
    width: 100%;
    justify-content: center;
    margin-top: 20px;
    cursor: pointer;
`;

export const IconButton = styled.button`
    font-size: 12px;
    height: 16px;
    width: 17px;
    color: var(--rose-300);
    background: none;
    border: 1px solid var(--rose-300);
    border-radius: 50%;
    cursor: pointer;
`;