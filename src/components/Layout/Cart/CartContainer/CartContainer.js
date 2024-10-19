import EmptyCart from '../EmptyCart/EmptyCart';
import CartResume from '../CartResume/CartResume';
import Title from '../../../Common/Title/Title';
import {StyledCartContainer} from './StyledCartContainer';

function CartContainer({cartInfos, cartItemState, removeItem, confirmedOrder, CartTotalPrice}) {
  return (
    <StyledCartContainer className="cartContainer">
      <Title as="h2" text="Your Cart" color="var(--red)" size="24px" margin="0 0 5px 0" number={cartItemState}/>
      {cartItemState == 0 ? <EmptyCart/> : <CartResume cartInfos={cartInfos} cartItemState={cartItemState} removeItem={removeItem} confirmedOrder={confirmedOrder} CartTotalPrice={CartTotalPrice.toFixed(2)}/>}
    </StyledCartContainer>
  );
}

export default CartContainer;