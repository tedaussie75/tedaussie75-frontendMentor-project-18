import styled from 'styled-components';

export const StyledImage = styled.img`
    border-radius: 10px;
    object-fit: cover;
    width: ${(props) => props.width};
    outline: ${(props) => props.outline};
`;

export const StyledPicture = styled.picture`
    border-radius: 10px;
    object-fit: cover;
    width: ${(props) => props.width};
    outline: ${(props) => props.outline};
`;