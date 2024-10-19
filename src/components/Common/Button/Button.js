import Image from '../Image/Image';
import {DefaultButton, CartButton, SelectableButton, IconButton} from './StyledButton';

const IconMoreLess = {
  more: "./images/icon-increment-quantity.svg",
  less: "./images/icon-decrement-quantity.svg"
}

function Button({text, margin, transform, eventClick, cartBtn, selectableBtn, iconEnable, selectedElems, children }) {
  if(selectableBtn && cartBtn) {
    return  <SelectableButton margin={margin} transform={transform}>
            <Image src={IconMoreLess.less} onClick={eventClick.removeProduct}/><span>{selectedElems}</span><Image src={IconMoreLess.more} onClick={eventClick.addProduct}/>
          </SelectableButton>
  } else if(!selectableBtn && cartBtn) {
    return  <CartButton margin={margin} transform={transform} onClick={eventClick.addProduct}>
              {children}<span>{text}</span>
            </CartButton>
  } else if(iconEnable) {
    return <IconButton onClick={eventClick}>
            <span>{text}</span>
          </IconButton>;
  }
  return <DefaultButton onClick={eventClick}>
    {children}<span>{text}</span>
  </DefaultButton>;
}

export default Button;
