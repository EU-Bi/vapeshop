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

// сделать фильтрацию по категориям
const Catalog = ({ devices, filters, current}) => {
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
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="backgroundCatalog">
      <Header />
      <div className="containerWrap">
        <div className="wrapWidth">
          <div className="upCatalog">
            <div className="blockOneShot">
              <h3>Одноразові сигарети</h3>
              <div></div>
            </div>
            <div className="blockPod">
              <h3>POD-системи</h3>
              <div></div>
            </div>
            <div className="blockCartridges">
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
                  filterDevices.map((device) => (
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
                <Pagination />
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
  devices: state.items.devices.rows,
  filters: state.items,
  current: state.filter.filters,
}))(Catalog);
