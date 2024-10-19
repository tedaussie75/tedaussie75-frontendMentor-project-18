import {StyledTitle} from './StyledTitle';

function Title({text, as,width, size, color, align, bold, margin, number }) {
  return (
        <StyledTitle
          as={as}
          width={width}
          size={size}
          color={color}
          align={align}
          bold={bold}
          margin={margin}>
          <span>{text}</span>
          <span style={{marginLeft: '5px'}}>{number !== undefined ? '('+number+')' : '' }</span>
        </StyledTitle>
  );
}

export default Title;
