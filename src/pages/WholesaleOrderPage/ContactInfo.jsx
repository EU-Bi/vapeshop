import React from "react";

const ContactInfo = () => {
  return (
    <div className="wrapContactInfo">
      <div className="contact">
        <h4>Контактна інформація</h4>
        <form>
          <div className="wrapInputLabel">
            <label htmlFor="">Ім’я</label>
            <input type="text" />
          </div>
          <div className="wrapInputLabel">
            <label htmlFor="">Прізвище</label>
            <input type="text" />
          </div>
          <div className="wrapInputLabel">
            <label htmlFor="">Номер телефону</label>
            <input type="text" />
          </div>
        </form>
      </div>
      <div className="deliveryInfo">
        <h4>Доставка</h4>
        <p>Самовивіз з Нової Пошти</p>
        <form>
          <div className="wrapInputLabel">
            <label htmlFor="">Область</label>
            <select name="select" className="location">
              <option>Kyiv</option>
            </select>
          </div>
          <div className="wrapInputLabel">
            <label htmlFor="">Місто</label>
            <select name="select" className="location">
              <option>Kyiv</option>
            </select>
          </div>
          <div className="wrapInputLabel">
            <label htmlFor="">Відділення</label>
            <select name="select" className="sending">
              <option>Kyiv</option>
            </select>
          </div>
        </form>
      </div>
      <div className="payInfo">
        <h4>Доставка</h4>
        <form action="" className="radio">
          <div className="wrapRadio">
            <input type="radio" name="typePaid" id="forCard" />
            <label htmlFor="forCard">Переказ на картку</label>
          </div>
          <div className="wrapRadio">
            <input type="radio" name="typePaid" id="forSending" />
            <label htmlFor="forSending">Оплата при отриманні замовлення</label>
          </div>
        </form>

        <span>
          Враховуйте комісію за послугу накладного платежу 2% від суми + 20 грн
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
