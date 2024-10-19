import React from 'react';
import {StyledParagraphe} from './StyledParagraphe';

function Paragraphe({text,className, size, color, margin, bold, children }) {
  return (
        <StyledParagraphe
          className={className}
          size={size}
          color={color}
          margin={margin}
          bold={bold}
          >
          {children ? children : text}
        </StyledParagraphe>
  );
}

export default Paragraphe;
