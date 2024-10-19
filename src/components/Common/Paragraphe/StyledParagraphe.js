import styled from 'styled-components';

export const StyledParagraphe = styled.p`
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    font-weight: ${(props) => props.bold};
`;