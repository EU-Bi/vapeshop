import {
  ADD_ITEM,
  DELETE_ITEM,
  REFRESH_BASKET,
  UPDATE_COUNT,
} from "../typesActions/types";

export const actionAddItemInBasket =
  ({ item, count }) =>
  (dispatch) => {
    dispatch(addItemInBasket(item, count));
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
const addItemInBasket = (item, count) => ({
  type: ADD_ITEM,
  payload: {
    device: item,
    countDevice: count ? count : 1,
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
export const actionRefreshBasket = () => {
  return {
    type: REFRESH_BASKET,
  };
};
