import { ADD_ITEM, DELETE_ITEM } from "../typesActions/types";

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

const deleteItemInBasket = (item) => ({
  type: DELETE_ITEM,
  payload: { item },
});
const addItemInBasket = (item) => ({
  type: ADD_ITEM,
  payload: { item },
});
