import {
  GET_ALL_BRANDS,
  GET_ALL_ITEMS,
  GET_ALL_MODELS,
  GET_ALL_TASTES,
  GET_ALL_TYPES,
} from "../typesActions/types";

export const actionGetAllItems = (items) => (dispatch) => {
  dispatch(getAllItems(items));
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
const getAllItems = (items) => ({
  type: GET_ALL_ITEMS,
  payload: items,
});

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
