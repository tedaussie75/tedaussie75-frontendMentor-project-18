import {StyledImage, StyledPicture} from './StyledImage';

function Image({src, width,outline, alt, picture, pictureSrc, onClick }) {
  if(picture) {
  return   <StyledPicture
            onClick={onClick}
            >
            <source srcset={pictureSrc.mobile} media="(max-width: 600px)" />
            <source srcset={pictureSrc.tablet} media="(max-width: 1200px)" />
            <Image
              src={src}
              width={width}
              outline={outline}
              alt={alt}
              onClick={onClick}/>
          </StyledPicture>
    }

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
