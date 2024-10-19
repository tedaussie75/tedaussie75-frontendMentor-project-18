import Image from '../../../Common/Image/Image';
import Button from '../../../Common/Button/Button';
import Paragraphe from '../../../Common/Paragraphe/Paragraphe';
import CartItem from '../CartItem/CartItem';
import {StyledCartResume} from './StyledCartResume';

function CartResume({cartInfos, CartTotalPrice,removeItem, confirmedOrder}) {
  return (
    <StyledCartResume className="cartResume">
        {cartInfos.map((cartInfo, index) => cartInfo.quantity > 0 && <CartItem key={index} inCart={true} productId={cartInfo.productId} productName={cartInfo.name} name={cartInfo.name} quantity={cartInfo.quantity} price={cartInfo.price} removeItem={removeItem}/>)}
      <Paragraphe className='total' children={<span>Total<strong>${CartTotalPrice}</strong></span>}/>
      <div className='neutralCarbonResume'>
        <Image src="/images/icon-carbon-neutral.svg" alt="icon tree"/>
        <Paragraphe children={<span>This is a <strong>carbon-neutral</strong> delivery</span>}/>
      </div>
      <Button text="Confirm Order" eventClick={confirmedOrder}/>
    </StyledCartResume>
  );
}

export default CartResume;