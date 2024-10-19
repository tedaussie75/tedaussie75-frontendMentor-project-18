import { useState, useEffect } from 'react';
import Image from '../../../Common/Image/Image';
import Button from '../../../Common/Button/Button';
import Title from '../../../Common/Title/Title';
import Paragraphe from '../../../Common/Paragraphe/Paragraphe';
import {StyledProductItem} from './StyledProductItem';

function ProductItem({productToReset, productId, imgSrc, name, category,  price, cartItemState, cartMethods}) {
  const [itemCount, setItemCount] = useState(0);
  let [itemSelected, setItemSelected] = useState(false);

  useEffect(() => {
    setItemSelected(itemCount !== 0 && cartItemState !== 0);
    cartItemState == 0 && setItemCount(count => count = 0);
  }, [itemCount, cartItemState]);

  useEffect(() => {
    productToReset.productId === productId && productMethods.resetProductState();
  }, [productToReset]);

  const productMethods = {
    addProduct: () => {
      setItemCount(count => count + 1);
      cartMethods.addToCart({productId,imgSrc,name,category,price,quantity: itemCount + 1});
    },
    removeProduct: () => {
      setItemCount(count => Math.max(0, count - 1));
      cartMethods.removeFromCart({productId, price});
    },
    resetProductState: () => {
      setItemSelected(false);
      setItemCount(count => count = 0);
    }
  }

  return (
    <StyledProductItem className="productItem">
        <Image src={imgSrc.desktop} width="100%" outline={itemSelected && '3px solid var(--red)'}/>
        <Button cartBtn={true} text="Add to cart" transform="translateY(-50%);" selectableBtn={itemSelected} selectedElems={itemCount} eventClick={productMethods} children={<Image src={process.env.PUBLIC_URL + 'images/icon-add-to-cart.svg'}/>}/>
        <Paragraphe text={category} color="var(--rose-500)"/>
        <Title as="h2" text={name} margin="5px 0" size="20px" color="var(--rose-700)"/>
        <Paragraphe text={'$' + price.toFixed(2)} color="var(--red)" bold="600"/>
    </StyledProductItem>
  );
}

export default ProductItem;