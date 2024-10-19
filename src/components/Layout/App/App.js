import './App.css';
import { useState, useEffect } from 'react';
import ProductItemList from '../Product/ProductItemList/ProductItemList';
import CartContainer from '../Cart/CartContainer/CartContainer';
import ConfirmOrderModal from '../Modal/ConfirmOrderModal/ConfirmOrderModal';

function App() {
  const [Cart, setCart] = useState([]);
  const [CartTotalPrice, setCartTotalPrice] = useState(0);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [CartItem, setCartItem] = useState(Math.max(0));
  const [productToReset, setProductToReset] = useState(false);

  useEffect(() => {
    Cart == [] && setCartItem(CartItem = 0);
  }, [Cart]);

  const cartMethods = {
    getProductIndexInCart: (Cart, productId) => Cart.findIndex((element) => element.productId === productId),
    addToCart: (addedProduct) => {
      setCartItem(CartItem + 1);
      const isProductInCart = !!Cart.find((element) => element.productId === addedProduct.productId);
      if(!isProductInCart) {
        setCart([...Cart, addedProduct]);
      } else {
        Cart[cartMethods.getProductIndexInCart(Cart,addedProduct.productId)].quantity++;
      }
      setCartTotalPrice(CartTotalPrice => CartTotalPrice + addedProduct.price);
    },
    removeFromCart: ({productId, price}) => {
      Cart[cartMethods.getProductIndexInCart(Cart, productId)].quantity--;
      setCartItem(CartItem - 1);
      setCartTotalPrice(CartTotalPrice => CartTotalPrice - price);
    },
    removeFullItemFromCart: (productId) => {
      const foundIndex = cartMethods.getProductIndexInCart(Cart, productId);
      setCartTotalPrice(CartTotalPrice => CartTotalPrice - ( Cart[foundIndex].quantity * Cart[foundIndex].price));
      setCartItem(CartItem - Cart[foundIndex].quantity);
      let newArray = [...Cart];
      newArray.splice(foundIndex, 1);
      setCart(newArray);
      setProductToReset(Cart[foundIndex]);
    }
  };

  const resetPage = () => {
    setOrderConfirmed(false);
    setCartTotalPrice(0);
    setCartItem(0);
    setCart([]);
  }

  const confirmedOrder = () => setOrderConfirmed(true);

  return (
    <div className="App">
      <ProductItemList cartItemState={CartItem} cartMethods={cartMethods} productToReset={productToReset}/>
      <CartContainer cartInfos={Cart} cartItemState={CartItem} removeItem={cartMethods.removeFullItemFromCart} confirmedOrder={confirmedOrder} CartTotalPrice={CartTotalPrice}/>
      {orderConfirmed && <ConfirmOrderModal Cart={Cart} CartTotalPrice={CartTotalPrice} closeModal={resetPage}/>}
    </div>
  );
}

export default App;
