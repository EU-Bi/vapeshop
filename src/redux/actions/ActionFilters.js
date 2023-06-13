import { ADD_FILTER, DELETE_FILTER } from "../typesActions/types";

export const actionAddFilter = (type, item) => (dispatch) => {
  dispatch(addIFilter(type, item));
};

export const actionDeleteFilter = (type, item) => (dispatch) => {
  dispatch(deleteFilter(type, item));
};

const deleteFilter = (type, item) => ({
  type: DELETE_FILTER,
  payload: {item, type},
});
const addIFilter = (type, item) => ({
  type: ADD_FILTER,
  payload: {item, type},
});
