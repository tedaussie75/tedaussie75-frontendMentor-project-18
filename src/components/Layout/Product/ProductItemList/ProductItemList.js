import Title from '../../../Common/Title/Title';
import ProductItem from '../ProductItem/ProductItem';
import {StyledProductItemList} from './StyledProductItemList';
import data from '../../../../assets/data/data.json';

function ProductItemList({productToReset, cartItemState, cartMethods}) {
  return (
    <StyledProductItemList>
        <Title text="Desserts" as="h1" width="100%" margin="0 0 20px 0"/>
        <div className="products">
            {data.map( (data, index) => <ProductItem key={index} productToReset={productToReset} productId={index} cartItemState={cartItemState} imgSrc={data.image} name={data.name} category={data.category} price={data.price} cartMethods={cartMethods}/>)}
        </div>
    </StyledProductItemList>
  );
}

export default ProductItemList;
