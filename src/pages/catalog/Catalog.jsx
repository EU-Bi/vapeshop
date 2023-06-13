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

// сделать фильтрацию по категориям
const Catalog = ({ devices, filters, current }) => {
  const [filterDevices, setFilterDevices] = useState(devices);
  useEffect(() => {
    current.map((filter) => {
      setFilterDevices(
        filterDevices.filter((device) => {
          if (filter.item.type === "counts") {
            return device.count > 0 === filter.item;
          }
          if (current === []) {
            return devices;
          } else {
            return device[filter.type.slice(0, -1)] === filter.item;
          }
        })
      );
    });
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
              {Object.keys(filters).map((filter) => (
                <FilterCard
                  key={filter}
                  filter={filters[filter]}
                  name={filter}
                />
              ))}
            </div>
            <div className="containerItems">
              <div className="wrapItems">
                {filterDevices.map((device) => (
                  <SmallCard key={device.id} device={device} />
                ))}
              </div>
              <div className="paginationWrap">
                <div className="btnShowMore">Показати ще</div>
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
