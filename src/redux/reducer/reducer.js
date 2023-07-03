import { combineReducers } from "redux";
import {
  ADD_FILTER,
  ADD_ITEM,
  DELETE_FILTER,
  DELETE_ITEM,
  DROP,
  GET_ALL_BRANDS,
  GET_ALL_ITEMS,
  GET_ALL_MODELS,
  GET_ALL_TASTES,
  GET_ALL_TYPES,
  GET_FIRST_ITEMS,
  REFRESH_BASKET,
  RESET_FILTERS,
  SET_CITY,
  SET_INDEXES,
  SET_NAME,
  SET_PHONE,
  SET_POST,
  SET_REGION,
  SET_SURNAME,
  SET_TYPE_PAID,
  SORT_FROM_HIGHT_PRICE,
  SORT_FROM_LOW_PRICE,
  SORT_NEW_DEVICES,
  SORT_RATING,
  UPDATE_COUNT,
} from "../typesActions/types";
let uniqueIdCounter = 1;
const initName = {
  name: "",
  surname: "",
  phone: "",
  region: "",
  post: "",
  city: "",
  type: "",
};
const initialState = {
  basket: [],
  total: 0,
};
const initialStateSort = {
  sort: null,
};
const initialStateDevicesPerPage = {
  indexOfLastItem: 12,
  indexOfFirstItem: 0,
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
          total:
            payload.device.model.newPrice !== 0
              ? state.total +
                payload.device.model.newPrice * payload.countDevice
              : state.total + payload.device.model.price * payload.countDevice,
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, newItem],
          total:
            payload.device.model.newPrice !== 0
              ? state.total +
                payload.device.model.newPrice * payload.countDevice
              : state.total + payload.device.model.price * payload.countDevice,
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
        total:
          payload.device.model.newPrice !== 0
            ? state.total - payload.device.model.newPrice * countDeleteItem
            : state.total - payload.device.model.price * countDeleteItem,
      };
    case UPDATE_COUNT:
      const updateCountDevice = state.basket.map((item) => {
        if (item.device.id === payload.device.id) {
          return payload;
        }
        return item;
      });
      const newTotal = updateCountDevice.reduce(
        (acc, item) =>
          item.device.model.newPrice !== 0
            ? acc + item.device.model.newPrice * item.countDevice
            : acc + item.device.model.price * item.countDevice,
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
    case GET_ALL_TASTES:
      return {
        ...state,
        tastes: payload.filter((obj, index, self) => {
          // Используем метод findIndex() для поиска первого вхождения элемента с текущим name
          const firstIndex = self.findIndex((item) => item.title === obj.title);
          // Если текущий индекс совпадает с первым индексом, значит, элемент уникален и его оставляем
          return index === firstIndex;
        }),
      };

    case GET_FIRST_ITEMS:
      return {
        ...state,
        firstDevices: payload.flatMap((device) =>
          device.model.tastes.map((taste) => ({
            id: uniqueIdCounter++,
            currentDevice: device.id,
            brand: device.brand,
            brandId: device.brandId,
            model: device.model,
            type: device.type,
            typeId: device.typeId,
            modelId: device.modelId,
            taste: taste,
          }))
        ),
      };
    case GET_ALL_ITEMS:
      return {
        ...state,
        devices: payload.flatMap((device) =>
          device.model.tastes.map((taste) => ({
            id: uniqueIdCounter++,
            currentDevice: device.id,
            brand: device.brand,
            brandId: device.brandId,
            model: device.model,
            type: device.type,
            typeId: device.typeId,
            modelId: device.modelId,
            taste: taste,
          }))
        ),
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
function devicesPageReducer(
  state = initialStateDevicesPerPage,
  { type, payload }
) {
  switch (type) {
    case SET_INDEXES:
      return {
        ...state,
        indexOfLastItem: payload.indexOfLastItem,
        indexOfFirstItem: payload.indexOfFirstItem,
      };
    default:
      return state;
  }
}

function sortReducer(state = initialStateSort, { type, payload }) {
  switch (type) {
    case SORT_RATING:
      return {
        ...state,
        sort: SORT_RATING,
      };
    case SORT_NEW_DEVICES:
      return {
        ...state,
        sort: SORT_NEW_DEVICES,
      };
    case SORT_FROM_HIGHT_PRICE:
      return {
        ...state,
        sort: SORT_FROM_HIGHT_PRICE,
      };
    case SORT_FROM_LOW_PRICE:
      return {
        ...state,
        sort: SORT_FROM_LOW_PRICE,
      };
    default:
      return state;
  }
}
function nameReducer(state = initName, { type, payload }) {
  switch (type) {
    case SET_NAME: {
      return {
        ...state,
        name: payload,
      };
    }
    case SET_SURNAME: {
      return {
        ...state,
        surname: payload,
      };
    }
    case SET_PHONE: {
      return {
        ...state,
        phone: payload,
      };
    }
    case SET_CITY: {
      return {
        ...state,
        city: payload,
      };
    }
    case SET_REGION: {
      return {
        ...state,
        region: payload,
      };
    }
    case SET_POST: {
      return {
        ...state,
        post: payload,
      };
    }
    case SET_TYPE_PAID: {
      return {
        ...state,
        type: payload,
      };
    }
    case DROP: {
      return initName;
    }
    default:
      return initName;
  }
}

const rootReducer = combineReducers({
  basket: basketReducer,
  items: itemsReducer,
  filter: filterReducer,
  page: devicesPageReducer,
  sort: sortReducer,
  form: nameReducer,
});

export default rootReducer;
