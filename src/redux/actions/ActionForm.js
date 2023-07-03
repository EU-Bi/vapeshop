import {
  DROP,
  SET_CITY,
  SET_NAME,
  SET_PHONE,
  SET_POST,
  SET_REGION,
  SET_SURNAME,
  SET_TYPE_PAID,
} from "../typesActions/types";

export const actionSetName = (name) => ({
  type: SET_NAME,
  payload: name,
});
export const actionSetSurname = (surname) => ({
  type: SET_SURNAME,
  payload: surname,
});
export const actionSetPhone = (phone) => ({
  type: SET_PHONE,
  payload: phone,
});
export const actionSetCity = (city) => ({
  type: SET_CITY,
  payload: city,
});
export const actionSetRegion = (region) => ({
  type: SET_REGION,
  payload: region,
});
export const actionSetPost = (post) => ({
  type: SET_POST,
  payload: post,
});

export const actionSetTypePaid = (type) => ({
    type: SET_TYPE_PAID,
    payload: type,
  });

export const dropForm = () => ({
  type: DROP,
});
