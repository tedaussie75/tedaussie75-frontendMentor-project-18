import {StyledImage} from './StyledImage';

function Image({src, width,outline, alt, onClick }) {
  return (
        <StyledImage
          src={src}
          width={width}
          outline={outline}
          alt={alt}
          onClick={onClick}
          >
        </StyledImage>
  );
}

export default Image;
