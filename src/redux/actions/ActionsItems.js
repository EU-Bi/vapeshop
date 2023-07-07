import {
  CURRENT_DEVICE,
  GET_ALL_BRANDS,
  GET_ALL_ITEMS,
  GET_ALL_MODELS,
  GET_ALL_TASTES,
  GET_ALL_TYPES,
  GET_FIRST_ITEMS,
  SET_INDEXES,
} from "../typesActions/types";

export const actionGetAllItems = (items) => (dispatch) => {
  dispatch(getAllItems(items));
};

export const actionGetFirstItems = (items) => (dispatch) => {
  dispatch(getFirstItems(items));
};

export const actionGetAllBrands = (brands) => (dispatch) => {
  dispatch(getAllBrands(brands));
};

export const actionGetAllModels = (models) => (dispatch) => {
  dispatch(getAllModels(models));
};
export const actionGetAllTastes = (tastes) => (dispatch) => {
  dispatch(getAllTastes(tastes));
};

export const actionGetAllTypes = (types) => (dispatch) => {
  dispatch(getAllTypes(types));
};

export const actionSetIndexes =
  (indexOfFirstItem, indexOfLastItem) => (dispatch) => {
    dispatch(setPages(indexOfFirstItem, indexOfLastItem));
  };
const getAllItems = (items) => ({
  type: GET_ALL_ITEMS,
  payload: items,
});

const getFirstItems = (items) => {
  return {
    type: GET_FIRST_ITEMS,
    payload: items,
  };
};

const getAllBrands = (brands) => ({
  type: GET_ALL_BRANDS,
  payload: brands,
});
const getAllModels = (models) => ({
  type: GET_ALL_MODELS,
  payload: models,
});
const getAllTypes = (types) => ({
  type: GET_ALL_TYPES,
  payload: types,
});
const getAllTastes = (tastes) => ({
  type: GET_ALL_TASTES,
  payload: tastes,
});

const setPages = (indexOfFirstItem, indexOfLastItem) => ({
  type: SET_INDEXES,
  payload: {
    indexOfFirstItem: indexOfFirstItem,
    indexOfLastItem: indexOfLastItem,
  },
});
