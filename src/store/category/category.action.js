import { createAction } from '../../utils/reducer/reducer.util';
import { CATEGORY_ACTION_TYPES } from './category.types';

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
