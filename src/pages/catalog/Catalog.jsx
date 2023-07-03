import "./Catalog.scss";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import FilterCard from "../../components/filters/filterCard/FilterCard";
import DropdownCatalog from "../../components/filters/dropdown/DropDownCatalog";
import SmallCard from "../../components/CardProduct/SmallCard/SmallCard";
import Telephone from "../../components/telephone/Telephone";
import Footer from "../../components/footer/Footer";
import Pagination from "../../components/pagination/Pagination";
import { connect } from "react-redux";
import { filterItem } from "../../functions/filterItem";
import {
  SORT_FROM_HIGHT_PRICE,
  SORT_FROM_LOW_PRICE,
  SORT_NEW_DEVICES,
  SORT_RATING,
} from "../../redux/typesActions/types";
import store from "../../redux/store/store";
import {
  actionAddFilter,
  actionResetFilters,
} from "../../redux/actions/ActionFilters";

// сделать фильтрацию по категориям
const Catalog = ({ devices, filters, current, page, sort, types }) => {
  const [filterDevices, setFilterDevices] = useState([]);
  useEffect(() => {
    setFilterDevices(devices);
  }, [devices]);
  useEffect(() => {
    if (current.length > 0) {
      let currentFilterDevices = [];
      current.map((filter) => {
        return currentFilterDevices.push(filterItem(filter, devices));
      });
      const result = (array) => {
        const allValues = array.flat();
        const uniqueValues = [...new Set(allValues)];
        return uniqueValues;
      };
      setFilterDevices(result(currentFilterDevices));
    } else {
      setFilterDevices(devices);
    }
  }, [current, devices]);
  function ReverseArray(arr) {
    var newArray = new Array();
    var len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }
  useEffect(() => {
    if (sort === SORT_RATING) {
      setFilterDevices(devices);
      store.dispatch(actionResetFilters());
    }
    if (sort === SORT_NEW_DEVICES) {
      setFilterDevices(ReverseArray(devices));
      store.dispatch(actionResetFilters());
    }
    if (sort === SORT_FROM_LOW_PRICE) {
      function compareByPrice(a, b) {
        return a.model.price - b.model.price;
      }
      let newDev = devices.sort(compareByPrice);
      setFilterDevices(newDev);
      store.dispatch(actionResetFilters());
    }
    if (sort === SORT_FROM_HIGHT_PRICE) {
      function compareByPriceDescending(a, b) {
        return b.model.price - a.model.price;
      }
      let newDev = devices.sort(compareByPriceDescending);
      setFilterDevices(newDev);
      store.dispatch(actionResetFilters());
    }

    console.log(sort);
  }, [sort, devices]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="backgroundCatalog">
      <Header />
      <div className="containerWrap">
        <div className="wrapWidth">
          <div className="upCatalog">
            <div
              className="blockOneShot"
              onClick={() => {
                store.dispatch(actionResetFilters());
                store.dispatch(actionAddFilter("types", types[0]));
              }}
            >
              <h3>Одноразові сигарети</h3>
              <div></div>
            </div>
            <div
              className="blockPod"
              onClick={() => {
                store.dispatch(actionResetFilters());
                store.dispatch(actionAddFilter("types", types[1]));
              }}
            >
              <h3>POD-системи</h3>
              <div></div>
            </div>
            <div
              className="blockCartridges"
              onClick={() => {
                store.dispatch(actionResetFilters());
                store.dispatch(actionAddFilter("types", types[2]));
              }}
            >
              <h3>Картриджі</h3>
              <div></div>
            </div>
          </div>
          <div className="catalogName">
            <h1>Каталог</h1>
            <DropdownCatalog />
          </div>
          <div className="midCatalog">
            <div className="filter">
              <div className="headerFilter">
                <div />
                <p>Фільтр товарів</p>
              </div>
              {Object.keys(filters).map((filter, index) => {
                if (filter === "firstDevices") {
                  return null;
                } else {
                  return (
                    <FilterCard
                      key={index}
                      filter={filters[filter]}
                      name={filter}
                      currentFilters={current}
                    />
                  );
                }
              })}
            </div>
            <div className="containerItems">
              <div className="wrapItems">
                {filterDevices.length > 0 ? (
                  filterDevices
                    .slice(page.indexOfFirstItem, page.indexOfLastItem)
                    .map((device) => (
                      <SmallCard key={device.id} device={device} />
                    ))
                ) : (
                  <div className="wrapNoItems">
                    <p>Товару за вибраними філтрами не має в наявності</p>
                  </div>
                )}
              </div>
              <div className="paginationWrap">
                {/* <div className="btnShowMore">Показати ще</div> */}
                <Pagination data={filterDevices} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Telephone />
    </div>
  );
};

export default connect((state) => ({
  devices: state.items.devices,
  filters: state.items,
  current: state.filter.filters,
  types: state.items.types,
  page: state.page,
  sort: state.sort.sort,
}))(Catalog);
