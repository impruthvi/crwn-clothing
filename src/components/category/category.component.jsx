import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCart from '../product-card/product-card.component';
import { CategoryContainer, Title } from './category.styles';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/category/category.selector';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategories);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
