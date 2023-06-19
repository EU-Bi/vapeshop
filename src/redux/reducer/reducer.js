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
  GET_FIRST_ITEMS,
  REFRESH_BASKET,
  RESET_FILTERS,
  UPDATE_COUNT,
} from "../typesActions/types";

const initialState = {
  basket: [],
  total: 0,
};
const initialStateItems = {
  brands: [],
  models: [],
  types: [],
  devices: [],
  firstDevices: [],
  tastes: [],
};
const initialStateFilter = {
  filters: [],
};

function basketReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_ITEM:
      const newItem = payload;
      const existingItemIndex = state.basket.findIndex(
        (item) => item.device.id === newItem.device.id
      );
      if (existingItemIndex !== -1) {
        const updatedItems = state.basket.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              countDevice:
                item.countDevice < item.device.count
                  ? newItem.countDevice !== 1
                    ? item.countDevice + 1
                    : item.countDevice + newItem.countDevice
                  : item.countDevice,
            };
          }
          return item;
        });

        return {
          ...state,
          basket: updatedItems,
          total: state.total + payload.device.model.price * payload.countDevice,
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, newItem],
          total: state.total + payload.device.model.price * payload.countDevice,
        };
      }
    case DELETE_ITEM:
      let countDeleteItem;
      const updatedDevices = state.basket.filter((item) => {
        if (item.device.id === payload.item.id) {
          countDeleteItem = item.countDevice;
        }
        return item.device.id !== payload.item.id;
      });

      return {
        ...state,
        basket: updatedDevices,
        total: state.total - payload.item.model.price * countDeleteItem,
      };
    case UPDATE_COUNT:
      const updateCountDevice = state.basket.map((item) => {
        if (item.device.id === payload.device.id) {
          return payload;
        }
        return item;
      });
      const newTotal = updateCountDevice.reduce(
        (acc, item) => acc + item.device.model.price * item.countDevice,
        0
      );
      return {
        basket: updateCountDevice,
        total: newTotal,
      };
    case REFRESH_BASKET:
      return {
        basket: [],
        total: 0,
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
    case GET_FIRST_ITEMS:
      return {
        ...state,
        firstDevices: {
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
        filters: state.filters.filter(
          (filter) => filter.item.title !== payload.item.title
        ),
      };
    case RESET_FILTERS:
      return {
        ...state,
        filters: payload,
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
