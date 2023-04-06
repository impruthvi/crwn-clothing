import { CATEGORY_ACTION_TYPES } from './category.types';

export const CATEGORIES_INIT_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (state = CATEGORIES_INIT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_ACTION_TYPES.CATEGORIES_INIT_STATE:
      return { ...state, isLoading: true };
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, isLoading: false, error: payload };
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoading: false };

    default:
      return state;
  }
};
