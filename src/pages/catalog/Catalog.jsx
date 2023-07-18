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
import { useMediaQuery } from "react-responsive";

// сделать фильтрацию по категориям
const Catalog = ({ devices, filters, current, page, sort, types }) => {
  const isDesKtop = useMediaQuery({ minWidth: "1280px" });
  const isTablet = useMediaQuery({ minWidth: "768px", maxWidth: "1279px" });
  const isMobile = useMediaQuery({ maxWidth: "767px" });

  const [openFilter, setOpenFilter] = useState(false);
  const handleClickOpenFilter = () => {
    setOpenFilter(!openFilter);
  };
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
    const sortedData = arr.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    return sortedData;
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
      const sortedData = devices.sort((a, b) => {
        const priceA =
          a.model.newPrice !== 0 ? a.model.newPrice : a.model.price;
        const priceB =
          b.model.newPrice !== 0 ? b.model.newPrice : b.model.price;
        return priceA - priceB;
      });
      setFilterDevices(sortedData);
      store.dispatch(actionResetFilters());
    }
    if (sort === SORT_FROM_HIGHT_PRICE) {
      const sortedData = devices.sort((a, b) => {
        const priceA =
          a.model.newPrice !== 0 ? a.model.newPrice : a.model.price;
        const priceB =
          b.model.newPrice !== 0 ? b.model.newPrice : b.model.price;
        return priceB - priceA;
      });
      setFilterDevices(sortedData);
      store.dispatch(actionResetFilters());
    }
  }, [sort, devices]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  if (isMobile) {
    return (
      <div className="backgroundCatalog">
        <Header />
        <div className="containerWrap">
          <div className="wrapWidth">
            <h1>Каталог</h1>
            <div className="upCatalog">
              <div className="wrapUpCatalog">
                <div
                  className="blockOneShot"
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("types", types[0]));
                  }}
                >
                  <div></div>
                </div>
                <h3>Одноразові сигарети</h3>
              </div>

              <div className="wrapUpCatalog">
                <div
                  className="blockPod"
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("types", types[1]));
                  }}
                >
                  <div></div>
                </div>
                <h3>POD-системи</h3>
              </div>

              <div className="wrapUpCatalog">
                <div
                  className="blockCartridges"
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("types", types[2]));
                  }}
                >
                  <div></div>
                </div>
                <h3>Рідини</h3>
              </div>
            </div>
            <div className="catalogName">
              <div
                className="headerFilter"
                onClick={() => handleClickOpenFilter()}
              >
                <div />
                <p>Фільтр товарів</p>
              </div>
              <DropdownCatalog />
            </div>
            {openFilter && (
              <div className="wrapFilterBurger">
                <div className="wrapHeaderFilterBurger">
                  <p>Фільтр товарів</p>
                  <div
                    className="close"
                    onClick={() => handleClickOpenFilter()}
                  ></div>
                </div>

                <div className="filter">
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
                <span>Ваші філтри застосовуются автоматично</span>
              </div>
            )}
            <div className="midCatalog">
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
                      <p>Товару за вибраними фільтрами не має в наявності</p>
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
  }
  if (isTablet) {
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
                <h3>Рідини</h3>
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
                      <p>Товару за вибраними фільтрами не має в наявності</p>
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
  }
  if (isDesKtop) {
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
                <h3>Рідини</h3>
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
                      <p>Товару за вибраними фільтрами не має в наявності</p>
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
  }
};

export default connect((state) => ({
  devices: state.items.devices,
  filters: state.items,
  current: state.filter.filters,
  types: state.items.types,
  page: state.page,
  sort: state.sort.sort,
}))(Catalog);
