import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Main.scss";
import Telephone from "../../components/telephone/Telephone";
import { Link } from "react-router-dom";
import SliderCustom from "./SliderCustom";
import store from "../../redux/store/store";
import {
  actionAddFilter,
  actionResetFilters,
} from "../../redux/actions/ActionFilters";
import { connect } from "react-redux";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

const Main = ({ brands }) => {
  const isDesKtop = useMediaQuery({ minWidth: "1280px" });
  const isTablet = useMediaQuery({ minWidth: "768px", maxWidth: "1279px" });
  const isMobile = useMediaQuery({ maxWidth: "767px" });

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
  };
  const Airis = brands.filter((brand) => brand.title === "Airis");
  const ElfBar = brands.filter((brand) => brand.title === "Elf Bar");
  const VAAL = brands.filter((brand) => brand.title === "VAAL");
  const Elux = brands.filter((brand) => brand.title === "Elux 2%");
  const STRAW = brands.filter((brand) => brand.title === "STRAW");
  if (isTablet) {
    return (
      <div className="backgroundCatalog">
        <Header />
        <div className="containerWrap">
          <div className="slider">
            <div className="firstSlide">
              <span>
                Одноразова сигарета від американського бренду Gost Straw
              </span>
              <Link
                to={"/catalog"}
                onClick={() => {
                  store.dispatch(actionResetFilters());
                  store.dispatch(actionAddFilter("brands", STRAW[0]));
                }}
              >
                ЗАМОВИТИ
              </Link>
            </div>
            <div className="wrapTwoSlide">
              <Link
                to={"/catalog"}
                className="secondSlide"
                onClick={() => {
                  store.dispatch(actionResetFilters());
                  store.dispatch(actionAddFilter("brands", ElfBar[0]));
                }}
              ></Link>
              <Link
                to={"/catalog"}
                className="thirdSlide"
                onClick={() => {
                  store.dispatch(actionResetFilters());
                  store.dispatch(actionAddFilter("brands", Airis[0]));
                }}
              ></Link>
            </div>
          </div>
          <div className="bestseller">
            <div className="textBestseller">
              <h2>Хіти продажів</h2>
              <Link
                to={"/catalog"}
                onClick={() => {
                  store.dispatch(actionResetFilters());
                }}
              >
                ПЕРЕЙТИ В КАТАЛОГ
              </Link>
            </div>
            <SliderCustom />
          </div>
          <div className="popularCategories">
            <h2>Популярні категорії</h2>
            <div className="wrapBlocks">
              <div className="wrapFourBlock">
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("brands", Elux[0]));
                  }}
                  className="longBlockOne"
                >
                  <div className="text">
                    <p>POD-система</p>
                    <h3>Elux 2%</h3>
                  </div>
                  <div className="photo"></div>
                </Link>
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("brands", ElfBar[0]));
                  }}
                  className="shortBlockOne"
                >
                  <div className="text">
                    <p>Одноразові сигарети</p>
                    <h3>ELFBAR</h3>
                  </div>
                  <div className="photo"></div>
                </Link>
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("brands", STRAW[0]));
                  }}
                  className="shortBlockTwo"
                >
                  <div className="text">
                    <p>Одноразові сигарети</p>
                    <h3>STRAW</h3>
                  </div>
                  <div className="photo"></div>
                </Link>
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("brands", VAAL[0]));
                  }}
                  className="longBlockTwo"
                >
                  <div className="text">
                    <p>Одноразові сигарети</p>
                    <h3>VAAL</h3>
                  </div>
                  <div className="photo"></div>
                </Link>
              </div>
              <Link
                to={"/catalog"}
                onClick={() => {
                  store.dispatch(actionResetFilters());
                  store.dispatch(actionAddFilter("brands", Airis[0]));
                }}
                className="rightBlock"
              >
                <div className="text">
                  <p>POD-система</p>
                  <h3>Airis</h3>
                </div>
                <div className="photo"></div>
              </Link>
            </div>
          </div>
          <div className="advantages">
            <h2>Переваги нашого магазину</h2>
            <div className="wrapAdvantages">
              <div className="advantagesBlocks">
                <h4>Оригінальний продукт</h4>
                <div className="trust"></div>
                <span>
                  У нашому магазині ви знайдете тільки оригінальну продукцію від
                  провідних виробників одноразових електронних сигарет та
                  POD-систем.
                </span>
              </div>
              <div className="advantagesBlocks">
                <h4>Широкий асортимент</h4>
                <div className="choice"></div>
                <span>
                  У нас ви обов’язково знайдете ідеальний варіант для себе,
                  оскільки наш асортимент включає великий вибір одноразових
                  електронних сигарет та POD-систем.
                </span>
              </div>
              <div className="advantagesBlocks">
                <h4>Доступні ціни</h4>
                <div className="money"></div>
                <span>
                  Ми ставимо перед собою завдання забезпечити
                  конкурентоспроможні ціни для того, щоб наші клієнти могли
                  купувати якісні товари без переплат.
                </span>
              </div>
            </div>
          </div>
          <div className="aboutUs">
            <h2>Про нас</h2>
            <span>
              Ласкаво просимо в наш інтернет-магазин електронних сигарет! Ми
              раді запропонувати вам широкий асортимент продукції відомих
              брендів, таких як Elf Bar, Elux 2%, Straw, Vaal, Oxbar, а також
              POD-систем Airis Pod-system та Elf Bar Pod-System.
              <br />
              <br /> Наші одноразові електронні сигарети - це простий, зручний і
              сучасний спосіб насолоджуватися відпочинком без шкідливих
              наслідків для вашого здоров'я. Ми пропонуємо лише найкращі
              продукти з натуральними смаками та ароматами, що не залишать
              неприємних запахів.
              <br /> <br />
              Крім того, наші POD-системи Airis Pod-system та Elf Bar Pod-System
              забезпечують високу якість пару та безпеку використання. Завдяки
              інноваційній технології, ви можете насолоджуватися смаком і
              ароматом без багатьох негативних наслідків для здоров'я.
              <br />
              <br /> Наш інтернет-магазин пропонує швидку та зручну доставку по
              всій країні, а також гарантію на всю нашу продукцію. Ми завжди
              раді допомогти нашим клієнтам з будь-якими питаннями та запитами,
              тому зв'яжіться з нами, якщо у вас виникнуть будь-які питання.
              Зробіть свій відпочинок більш приємним з нашими електронними
              сигаретами та POD-системами від найкращих виробників! Замовляйте
              прямо зараз та насолоджуйтесь!
            </span>
          </div>
        </div>
        <Footer />
        {/* <Telephone /> */}
      </div>
    );
  }
  if (isMobile) {
    return (
      <div className="backgroundCatalog">
        <Header />
        <div className="containerWrap">
          <Slider {...settings}>
            <div className="firstSlide">
              <div className="div">
                <span>
                  Одноразова сигарета від американського бренду Gost Straw
                </span>
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("brands", STRAW[0]));
                  }}
                >
                  ЗАМОВИТИ
                </Link>
              </div>
            </div>
            <Link
              to={"/catalog"}
              className="secondSlide"
              onClick={() => {
                store.dispatch(actionResetFilters());
                store.dispatch(actionAddFilter("brands", ElfBar[0]));
              }}
            ></Link>
            <Link
              to={"/catalog"}
              className="thirdSlide"
              onClick={() => {
                store.dispatch(actionResetFilters());
                store.dispatch(actionAddFilter("brands", Airis[0]));
              }}
            ></Link>
          </Slider>
          {/* <div className="slider">
           
            <div className="wrapTwoSlide">
             
             
            </div>
          </div> */}
          <div className="bestseller">
            <div className="textBestseller">
              <h2>Хіти продажів</h2>
            </div>
            <SliderCustom />
          </div>
          <div className="popularCategories">
            <h2>Популярні категорії</h2>
            <div className="wrapBlocks">
              <div className="wrapFourBlock">
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("brands", Elux[0]));
                  }}
                  className="longBlockOne"
                >
                  <div className="text">
                    <p>POD-система</p>
                    <h3>Elux 2%</h3>
                  </div>
                  <div className="photo"></div>
                </Link>
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("brands", ElfBar[0]));
                  }}
                  className="shortBlockOne"
                >
                  <div className="text">
                    <p>Одноразові сигарети</p>
                    <h3>ELFBAR</h3>
                  </div>
                  <div className="photo"></div>
                </Link>
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("brands", STRAW[0]));
                  }}
                  className="shortBlockTwo"
                >
                  <div className="text">
                    <p>Одноразові сигарети</p>
                    <h3>STRAW</h3>
                  </div>
                  <div className="photo"></div>
                </Link>
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("brands", VAAL[0]));
                  }}
                  className="longBlockTwo"
                >
                  <div className="text">
                    <p>Одноразові сигарети</p>
                    <h3>VAAL</h3>
                  </div>
                  <div className="photo"></div>
                </Link>
              </div>
              <Link
                to={"/catalog"}
                onClick={() => {
                  store.dispatch(actionResetFilters());
                  store.dispatch(actionAddFilter("brands", Airis[0]));
                }}
                className="rightBlock"
              >
                <div className="text">
                  <p>POD-система</p>
                  <h3>Airis</h3>
                </div>
                <div className="photo"></div>
              </Link>
            </div>
          </div>
          <div className="advantages">
            <h2>Переваги нашого магазину</h2>
            <div className="wrapAdvantages">
              <div className="advantagesBlocks">
                <h4>Оригінальний продукт</h4>
                <div className="trust"></div>
                <span>
                  У нашому магазині ви знайдете тільки оригінальну продукцію від
                  провідних виробників одноразових електронних сигарет та
                  POD-систем.
                </span>
              </div>
              <div className="advantagesBlocks">
                <h4>Широкий асортимент</h4>
                <div className="choice"></div>
                <span>
                  У нас ви обов’язково знайдете ідеальний варіант для себе,
                  оскільки наш асортимент включає великий вибір одноразових
                  електронних сигарет та POD-систем.
                </span>
              </div>
              <div className="advantagesBlocks">
                <h4>Доступні ціни</h4>
                <div className="money"></div>
                <span>
                  Ми ставимо перед собою завдання забезпечити
                  конкурентоспроможні ціни для того, щоб наші клієнти могли
                  купувати якісні товари без переплат.
                </span>
              </div>
            </div>
          </div>
          <div className="aboutUs">
            <h2>Про нас</h2>
            <span>
              Ласкаво просимо в наш інтернет-магазин електронних сигарет! Ми
              раді запропонувати вам широкий асортимент продукції відомих
              брендів, таких як Elf Bar, Elux 2%, Straw, Vaal, Oxbar, а також
              POD-систем Airis Pod-system та Elf Bar Pod-System.
              <br />
              <br /> Наші одноразові електронні сигарети - це простий, зручний і
              сучасний спосіб насолоджуватися відпочинком без шкідливих
              наслідків для вашого здоров'я. Ми пропонуємо лише найкращі
              продукти з натуральними смаками та ароматами, що не залишать
              неприємних запахів.
              <br /> <br />
              Крім того, наші POD-системи Airis Pod-system та Elf Bar Pod-System
              забезпечують високу якість пару та безпеку використання. Завдяки
              інноваційній технології, ви можете насолоджуватися смаком і
              ароматом без багатьох негативних наслідків для здоров'я.
              <br />
              <br /> Наш інтернет-магазин пропонує швидку та зручну доставку по
              всій країні, а також гарантію на всю нашу продукцію. Ми завжди
              раді допомогти нашим клієнтам з будь-якими питаннями та запитами,
              тому зв'яжіться з нами, якщо у вас виникнуть будь-які питання.
              Зробіть свій відпочинок більш приємним з нашими електронними
              сигаретами та POD-системами від найкращих виробників! Замовляйте
              прямо зараз та насолоджуйтесь!
            </span>
          </div>
        </div>
        <Footer />
        {/* <Telephone /> */}
      </div>
    );
  }
  if (isDesKtop) {
    return (
      <div className="backgroundCatalog">
        <Header />
        <div className="containerWrap">
          <div className="slider">
            <div className="firstSlide">
              <span>
                Одноразова сигарета від американського бренду Gost Straw
              </span>
              <Link
                to={"/catalog"}
                onClick={() => {
                  store.dispatch(actionResetFilters());
                  store.dispatch(actionAddFilter("brands", STRAW[0]));
                }}
              >
                ЗАМОВИТИ
              </Link>
            </div>
            <div className="wrapTwoSlide">
              <Link
                to={"/catalog"}
                className="secondSlide"
                onClick={() => {
                  store.dispatch(actionResetFilters());
                  store.dispatch(actionAddFilter("brands", ElfBar[0]));
                }}
              ></Link>
              <Link
                to={"/catalog"}
                className="thirdSlide"
                onClick={() => {
                  store.dispatch(actionResetFilters());
                  store.dispatch(actionAddFilter("brands", Airis[0]));
                }}
              ></Link>
            </div>
          </div>
          <div className="bestseller">
            <div className="textBestseller">
              <h2>Хіти продажів</h2>
              <Link
                to={"/catalog"}
                onClick={() => {
                  store.dispatch(actionResetFilters());
                }}
              >
                ПЕРЕЙТИ В КАТАЛОГ
              </Link>
            </div>
            <SliderCustom />
          </div>
          <div className="popularCategories">
            <h2>Популярні категорії</h2>
            <div className="wrapBlocks">
              <div className="wrapFourBlock">
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("brands", Elux[0]));
                  }}
                  className="longBlockOne"
                >
                  <div className="text">
                    <p>POD-система</p>
                    <h3>Elux 2%</h3>
                  </div>
                  <div className="photo"></div>
                </Link>
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("brands", ElfBar[0]));
                  }}
                  className="shortBlockOne"
                >
                  <div className="text">
                    <p>Одноразові сигарети</p>
                    <h3>ELFBAR</h3>
                  </div>
                  <div className="photo"></div>
                </Link>
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("brands", STRAW[0]));
                  }}
                  className="shortBlockTwo"
                >
                  <div className="text">
                    <p>Одноразові сигарети</p>
                    <h3>STRAW</h3>
                  </div>
                  <div className="photo"></div>
                </Link>
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("brands", VAAL[0]));
                  }}
                  className="longBlockTwo"
                >
                  <div className="text">
                    <p>Одноразові сигарети</p>
                    <h3>VAAL</h3>
                  </div>
                  <div className="photo"></div>
                </Link>
              </div>
              <Link
                to={"/catalog"}
                onClick={() => {
                  store.dispatch(actionResetFilters());
                  store.dispatch(actionAddFilter("brands", Airis[0]));
                }}
                className="rightBlock"
              >
                <div className="text">
                  <p>POD-система</p>
                  <h3>Airis</h3>
                </div>
                <div className="photo"></div>
              </Link>
            </div>
          </div>
          <div className="advantages">
            <h2>Переваги нашого магазину</h2>
            <div className="wrapAdvantages">
              <div className="advantagesBlocks">
                <h4>Оригінальний продукт</h4>
                <div className="trust"></div>
                <span>
                  У нашому магазині ви знайдете тільки оригінальну продукцію від
                  провідних виробників одноразових електронних сигарет та
                  POD-систем.
                </span>
              </div>
              <div className="advantagesBlocks">
                <h4>Широкий асортимент</h4>
                <div className="choice"></div>
                <span>
                  У нас ви обов’язково знайдете ідеальний варіант для себе,
                  оскільки наш асортимент включає великий вибір одноразових
                  електронних сигарет та POD-систем.
                </span>
              </div>
              <div className="advantagesBlocks">
                <h4>Доступні ціни</h4>
                <div className="money"></div>
                <span>
                  Ми ставимо перед собою завдання забезпечити
                  конкурентоспроможні ціни для того, щоб наші клієнти могли
                  купувати якісні товари без переплат.
                </span>
              </div>
            </div>
          </div>
          <div className="aboutUs">
            <h2>Про нас</h2>
            <span>
              Ласкаво просимо в наш інтернет-магазин електронних сигарет! Ми
              раді запропонувати вам широкий асортимент продукції відомих
              брендів, таких як Elf Bar, Elux 2%, Straw, Vaal, Oxbar, а також
              POD-систем Airis Pod-system та Elf Bar Pod-System.
              <br />
              <br /> Наші одноразові електронні сигарети - це простий, зручний і
              сучасний спосіб насолоджуватися відпочинком без шкідливих
              наслідків для вашого здоров'я. Ми пропонуємо лише найкращі
              продукти з натуральними смаками та ароматами, що не залишать
              неприємних запахів.
              <br /> <br />
              Крім того, наші POD-системи Airis Pod-system та Elf Bar Pod-System
              забезпечують високу якість пару та безпеку використання. Завдяки
              інноваційній технології, ви можете насолоджуватися смаком і
              ароматом без багатьох негативних наслідків для здоров'я.
              <br />
              <br /> Наш інтернет-магазин пропонує швидку та зручну доставку по
              всій країні, а також гарантію на всю нашу продукцію. Ми завжди
              раді допомогти нашим клієнтам з будь-якими питаннями та запитами,
              тому зв'яжіться з нами, якщо у вас виникнуть будь-які питання.
              Зробіть свій відпочинок більш приємним з нашими електронними
              сигаретами та POD-системами від найкращих виробників! Замовляйте
              прямо зараз та насолоджуйтесь!
            </span>
          </div>
        </div>
        <Footer />
        <Telephone />
      </div>
    );
  }
};

export default connect((state) => ({ brands: state.items.brands }))(Main);
