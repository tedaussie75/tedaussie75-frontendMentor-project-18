
import Button from '../../../Common/Button/Button';
import Image from '../../../Common/Image/Image';
import Title from '../../../Common/Title/Title';
import Paragraphe from '../../../Common/Paragraphe/Paragraphe';
import CartItem from '../../Cart/CartItem/CartItem';
import {StyledConfirmModal, StyledConfirmContent} from './StyledConfirmOrderModal';

function ConfirmOrderModal({Cart, CartTotalPrice, closeModal}) {
  return (
    <StyledConfirmModal>
        <StyledConfirmContent>
          <Image src="/images/icon-order-confirmed.svg" alt="icon validation" width="35px"/>
          <Title as="h2" text="Order Confirmed" margin="10px 0 0" size="30px"/>
          <Paragraphe text="We hope your enjoy your food!" margin="10px 0 20px" size="11px" color="var(--rose-500)" bold="600"/>
          <div class="orderResume">
            {Cart.map((cartItem, index) => cartItem.quantity > 0 && <CartItem key={index} productId={cartItem.productId} productName={cartItem.name} name={cartItem.name} imgSrc={cartItem.imgSrc} quantity={cartItem.quantity} price={cartItem.price}/>)}
            <Paragraphe className='total' children={<span>Order total<strong>${CartTotalPrice.toFixed(2)}</strong></span>}/>
          </div>
          <Button text="Start New Order" eventClick={closeModal}/>
        </StyledConfirmContent>
    </StyledConfirmModal>
  );
}

export default ConfirmOrderModal;
