import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../../components/category/category.component';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.util';
import { selectCategories } from '../../store/category/category.action';
import { useDispatch } from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(selectCategories(categoriesArray));
    };
    getCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
