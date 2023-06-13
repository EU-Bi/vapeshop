import React, { useEffect} from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Main.scss";
import Telephone from "../../components/telephone/Telephone";
import { Link } from "react-router-dom";
import { fetchDataFromServer } from "../../functions/http/fetchData";
import SliderCustom from "./SliderCustom";

const Main = () => {

  useEffect(() => {
    fetchDataFromServer();
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  
  return (
    <div className="backgroundCatalog">
      <Header />
      <div className="containerWrap">
        <div className="slider">
          <div className="firstSlide">
            <span>
              Одноразова сигарета від американського бренду Gost Straw
            </span>
            <button>ЗАМОВИТИ</button>
          </div>
          <div className="wrapTwoSlide">
            <div className="secondSlide"></div>
            <div className="thirdSlide"></div>
          </div>
        </div>
        <div className="bestseller">
          <div className="textBestseller">
            <h2>Хіти продажів</h2>
            <Link to={"/catalog"}>ПЕРЕЙТИ В КАТАЛОГ</Link>
          </div>
         <SliderCustom/>
        </div>
        <div className="popularCategories">
          <h2>Популярні категорії</h2>
          <div className="wrapBlocks">
            <div className="wrapFourBlock">
              <div className="longBlockOne">
                <div className="text">
                  <p>POD-система</p>
                  <h3>Elux 2%</h3>
                </div>
                <div className="photo"></div>
              </div>
              <div className="shortBlockOne">
                <div className="text">
                  <p>Одноразові сигарети</p>
                  <h3>ELFBAR</h3>
                </div>
                <div className="photo"></div>
              </div>
              <div className="shortBlockTwo">
                <div className="text">
                  <p>Одноразові сигарети</p>
                  <h3>STRAW</h3>
                </div>
                <div className="photo"></div>
              </div>
              <div className="longBlockTwo">
                <div className="text">
                  <p>Одноразові сигарети</p>
                  <h3>VAAL</h3>
                </div>
                <div className="photo"></div>
              </div>
            </div>
            <div className="rightBlock">
              <div className="text">
                <p>POD-система</p>
                <h3>Airis</h3>
              </div>
              <div className="photo"></div>
            </div>
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
                Ми ставимо перед собою завдання забезпечити конкурентоспроможні
                ціни для того, щоб наші клієнти могли купувати якісні товари без
                переплат.
              </span>
            </div>
          </div>
        </div>
        <div className="aboutUs">
          <h2>Про нас</h2>
          <span>
            Ласкаво просимо в наш інтернет-магазин електронних сигарет! Ми раді
            запропонувати вам широкий асортимент продукції відомих брендів,
            таких як Elf Bar, Elux 2%, Straw, Vaal, Oxbar, а також POD-систем
            Airis Pod-system та Elf Bar Pod-System.
            <br />
            <br /> Наші одноразові електронні сигарети - це простий, зручний і
            сучасний спосіб насолоджуватися відпочинком без шкідливих наслідків
            для вашого здоров'я. Ми пропонуємо лише найкращі продукти з
            натуральними смаками та ароматами, що не залишать неприємних
            запахів.
            <br /> <br />
            Крім того, наші POD-системи Airis Pod-system та Elf Bar Pod-System
            забезпечують високу якість пару та безпеку використання. Завдяки
            інноваційній технології, ви можете насолоджуватися смаком і ароматом
            без багатьох негативних наслідків для здоров'я.
            <br />
            <br /> Наш інтернет-магазин пропонує швидку та зручну доставку по
            всій країні, а також гарантію на всю нашу продукцію. Ми завжди раді
            допомогти нашим клієнтам з будь-якими питаннями та запитами, тому
            зв'яжіться з нами, якщо у вас виникнуть будь-які питання. Зробіть
            свій відпочинок більш приємним з нашими електронними сигаретами та
            POD-системами від найкращих виробників! Замовляйте прямо зараз та
            насолоджуйтесь!
          </span>
        </div>
      </div>
      <Footer />
      <Telephone />
    </div>
  );
};

export default Main;
