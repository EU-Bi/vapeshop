import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardBasket from "../../components/CardProduct/CardBasket/CardBasket";
import ContactInfo from "./ContactInfo";
import { connect } from "react-redux";
import SendMessageBuy from "../../functions/SendMessageBuy";
import store from "../../redux/store/store";
import { actionRefreshBasket } from "../../redux/actions/ActionsBasket";

const MainWholesale = ({ basket, total, form }) => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("");
  return (
    <div className="wrapperMainWholesale">
      <h2>Оформлення замовлення</h2>
      <div className="wrapCheckOut">
        <div className="contactInformation">
          <ContactInfo />
        </div>
        <div className="wrapOrder">
          <div className="headerOder">
            <p>Ваше замовлення:</p>
            <Link onClick={() => store.dispatch(actionRefreshBasket())}>
              Очистити корзину
            </Link>
          </div>
          <div className="wrapItems">
            {basket.length > 0 ? (
              basket.map((item, key) => (
                <CardBasket
                  key={key}
                  item={item.device}
                  count={item.countDevice}
                />
              ))
            ) : (
              <div className="noItems">
                Товар не додано до кошику
                <Link to={"/catalog"}>Перейти в каталог</Link>
              </div>
            )}
          </div>
          <div className="delivery">
            <div className="wrapDelivery">
              <h5>Доставка</h5>
              <p>Нова Пошта</p>
            </div>
            <p>оплата за тарифами перевізника</p>
          </div>
          <div className="promocode">
            <div className="wrapPromoCode">
              <h5>Промокод</h5>
              {!isActive && <p onClick={() => setIsActive(true)}>Додати</p>}
            </div>
            {isActive && (
              <div className="promocodeFied">
                <input type="text" />
              </div>
            )}
          </div>
          <div className="additionMessage">
            <textarea
              placeholder="Тут ви можете залишити додатковий коментар до вашого замовлення"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="pay">
            <p className="payText">До сплати</p>
            <p className="priceText">{total} грн.</p>
          </div>
          <Link
            disabled={basket.length > 0 ? false : true}
            to={"/greeting"}
            className="checkOutOrder"
            onClick={() => {
              SendMessageBuy(
                form.name,
                form.surname,
                form.type,
                form.phone,
                basket,
                form.post,
                form.region,
                text,
                form.city,
                total
              );
              store.dispatch(actionRefreshBasket());
            }}
          >
            ОФОРМИТИ ЗАМОВЛЕННЯ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  basket: state.basket.basket,
  total: state.basket.total,
  form: state.form,
}))(MainWholesale);
