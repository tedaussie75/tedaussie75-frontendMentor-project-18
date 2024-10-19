import React from 'react';
import styled from 'styled-components';

export const StyledTitle = styled(({ as, ...rest }) => React.createElement(as, rest))`
    width: ${(props) => props.width};
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    text-align: ${(props) => props.align};
    font-weight: ${(props) => props.bold};
    margin: ${(props) => props.margin};
`;
