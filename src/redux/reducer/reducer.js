import { combineReducers } from "redux";
import {
  ADD_FILTER,
  ADD_ITEM,
  DELETE_FILTER,
  DELETE_ITEM,
  GET_ALL_BRANDS,
  GET_ALL_ITEMS,
  GET_ALL_MODELS,
  GET_ALL_TASTES,
  GET_ALL_TYPES,
  REFRESH_BASKET,
} from "../typesActions/types";

const initialState = {
  basket: [],
};
const initialStateItems = {
  brands: [],
  models: [],
  types: [],
  devices: [],
  tastes: [],
};
const initialStateFilter = {
  filters: [],
};

function basketReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        basket: [...state.basket, payload],
      };
    case DELETE_ITEM:
      return {
        basket: state.basket.filter(
          ({ id, count }) => id !== payload && count >= 1
        ),
      };
    case REFRESH_BASKET:
      return {
        basket: [],
      };
    default:
      return state;
  }
}

function itemsReducer(state = initialStateItems, { type, payload }) {
  switch (type) {
    case GET_ALL_BRANDS:
      return {
        ...state,
        brands: payload,
      };
    case GET_ALL_TASTES:
      return {
        ...state,
        tastes: payload,
      };
    case GET_ALL_MODELS:
      return {
        ...state,
        models: payload,
      };
    case GET_ALL_TYPES:
      return {
        ...state,
        types: payload,
      };
    case GET_ALL_ITEMS:
      return {
        ...state,
        devices: {
          count: payload.count,
          rows: payload.rows.map((device) => ({
            id: device.id,
            model: state.models.filter((model) => {
              let currentModel;
              if (model.id === device.modelId) {
                currentModel = model;
              }
              return currentModel;
            })[0],
            brand: state.brands.filter((brand) => {
              let currentBrand;
              if (brand.id === device.brandId) {
                currentBrand = brand;
              }
              return currentBrand;
            })[0],
            type: state.types.filter((type) => {
              let currentType;
              if (type.id === device.typeId) {
                currentType = type;
              }
              return currentType;
            })[0],
            img: device.img,
            count: device.count,
          })),
        },
      };
    default:
      return state;
  }
}
function filterReducer(state = initialStateFilter, { type, payload }) {
  switch (type) {
    case ADD_FILTER:
      return {
        ...state,
        filters: [...state.filters, payload],
      };
    case DELETE_FILTER:
      return {
        filters: state.filters.filter(({ title }) => title !== payload.title),
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  basket: basketReducer,
  items: itemsReducer,
  filter: filterReducer,
});

export default rootReducer;
