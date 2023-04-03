import { createContext, useEffect, useState } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.util.js';

import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const getCategoriesmap = async () => {

      const categoriesMap = await getCategoriesAndDocuments();
      console.log(categoriesMap);
    }
    getCategoriesmap()
  })

  const value = { products }
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
