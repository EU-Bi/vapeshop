import { ADD_ITEM, DELETE_ITEM, UPDATE_COUNT } from "../typesActions/types";

export const actionAddItemInBasket =
  ({ item }) =>
  (dispatch) => {
    dispatch(addItemInBasket(item));
  };

export const actionDeleteItemInBasket =
  ({ item }) =>
  (dispatch) => {
    dispatch(deleteItemInBasket(item));
  };
export const actionUpdateCountDevice =
  ({ item, count }) =>
  (dispatch) => {
    dispatch(updateCountDevice(item, count));
  };

const deleteItemInBasket = (item) => ({
  type: DELETE_ITEM,
  payload: { item },
});
const addItemInBasket = (item) => ({
  type: ADD_ITEM,
  payload: {
    device: item,
    countDevice: 1,
  },
});

const updateCountDevice = (item, count) => {
  return {
    type: UPDATE_COUNT,
    payload: {
      device: item,
      countDevice: count,
    },
  };
};
