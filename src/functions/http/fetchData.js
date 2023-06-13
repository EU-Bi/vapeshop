import axios from "axios";
import {
  actionGetAllBrands,
  actionGetAllItems,
  actionGetAllModels,
  actionGetAllTastes,
  actionGetAllTypes,
} from "../../redux/actions/ActionsItems";
import store from "../../redux/store/store";

export const fetchDataFromServer = () => {
  axios
    .get(`${process.env.REACT_APP_API_URL}api/type`)
    .then((res) => store.dispatch(actionGetAllTypes(res.data)));
  axios
    .get(`${process.env.REACT_APP_API_URL}api/brand`)
    .then((res) => store.dispatch(actionGetAllBrands(res.data)));
  axios
    .get(`${process.env.REACT_APP_API_URL}api/model`)
    .then((res) => store.dispatch(actionGetAllModels(res.data)));
  axios
    .get(`${process.env.REACT_APP_API_URL}api/taste`)
    .then((res) => store.dispatch(actionGetAllTastes(res.data)));
  axios
    .get(`${process.env.REACT_APP_API_URL}api/device`)
    .then((res) => store.dispatch(actionGetAllItems(res.data)));
};
