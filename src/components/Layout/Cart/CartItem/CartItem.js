import Paragraphe from '../../../Common/Paragraphe/Paragraphe';
import Image from '../../../Common/Image/Image';
import {StyledCartItem, StyledCartItemInfos} from './StyledCartItem';

function CartItem({inCart, imgSrc, productId, name, quantity, price, removeItem}) {
  return (
    <StyledCartItem className={inCart ? 'cartItem' : 'orderItem'}>
        {!inCart && <Image src={imgSrc.thumbnail} alt="remove item icon" onClick={() => removeItem(productId)}/>}
        <StyledCartItemInfos className='itemInfos'>
            <Paragraphe text={name} color="var(--rose-900)" bold="600" size="14px"/>
            <Paragraphe children={<div><strong>{quantity}x</strong><span>@${price.toFixed(2)}</span><span>${(price * quantity).toFixed(2)}</span></div>} />
        </StyledCartItemInfos>
        {inCart && <Image src="/images/icon-remove-item.svg" alt="remove item icon" onClick={() => removeItem(productId)}/>}
    </StyledCartItem>
  );
}

export default CartItem;