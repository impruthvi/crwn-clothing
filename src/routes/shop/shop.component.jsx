import { useContext } from 'react';
import { ProductsContext } from '../../context/product.context'
import ProductCart from '../../components/product-card/product-card.component';
import './shop.styles.scss';
const Shop = () => {
  const { products } = useContext(ProductsContext);
  
  return <div className='products-container'>
    {products.map((product) => {
      return (
        <ProductCart key={product.id} product={product}/>
      );
    })}
  </div>;
};

export default Shop;
