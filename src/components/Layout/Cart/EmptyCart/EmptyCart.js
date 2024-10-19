import Image from '../../../Common/Image/Image';
import Paragraphe from '../../../Common/Paragraphe/Paragraphe';
import {StyledEmptyCart} from './StyledEmptyCart';

function EmptyCart() {
  return (
    <StyledEmptyCart className="EmptyCart">
        <Image src="/images/illustration-empty-cart.svg" alt="empty cart illustration" width="50%"/>
        <Paragraphe text="Your added items will appear here" size="11px" color="var(--rose-500)" bold="bold"/>
    </StyledEmptyCart>
  );
}

export default EmptyCart;