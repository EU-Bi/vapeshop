import React, { useState } from "react";
import "./MainOptPage.scss";
import { SendMessageOpt } from "../../functions/SendMessageOpt";
import convertPhoneNumber from "../../functions/ConvertPhone";

const MainOptPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [count, setCount] = useState("");
  const [label, setLabel] = useState("");

  const handleSendMessage = (name, phone, count, type) => {
    SendMessageOpt({ phone, name, type, count });
    setCount("");
    setLabel("");
    setName("");
    setPhone("");
  };

  return (
    <div className="wrapMainOpt">
      <h2>Оптові замовлення</h2>
      <div className="wrapContent">
        <div className="leftSide">
          <h3>Зробіть оптове замовлення</h3>
          <span>за 3 простих кроки:</span>
          <div className="wrapRow">
            <div>1</div>
            <p>Оберіть на сайті товари, які ви хочете замовити</p>
          </div>
          <div className="wrapRow">
            <div>2</div>
            <p>Заповність заявку та вкажіть всі потрібні дані</p>
          </div>
          <div className="wrapRow">
            <div>3</div>
            <p>
              Очікуйте дзвінка менеджера, який оформить замовлення та відправить
              його вам
            </p>
          </div>
        </div>
        <div className="rightSide">
          <h4>Бажаєте, зробити оптове замовлення?</h4>
          <p>Заповніть форму і ми вам зателефонуємо</p>
          <label htmlFor="">Ваше ім’я</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">Ваш номер телефону</label>
          <input
            type="text"
            value={phone}
            required
            maxLength={10}
            onChange={(e) => setPhone(convertPhoneNumber(e.target.value))}
          />
          <label htmlFor="">Вкажіть необхідну кількість</label>
          <input
            type="text"
            value={count}
            required
            onChange={(e) => setCount(e.target.value)}
          />
          <label htmlFor="">Введіть назву товару, який бажаєте замовити</label>
          <input
            type="text"
            value={label}
            required
            onChange={(e) =>{ 
              setLabel(e.target.value)
              console.log(label)
            }}
          />
          <button
            className="btnSendApplication"
            onClick={() => handleSendMessage(name, phone, count, label)}
          >
            Надіслати заявку
          </button>
        </div>
      </div>
      <span>
        У нашому магазині доступні оптові замовлення. Ви можете замовити
        будь-яку модель, яка розміщена на сайті. Ми регулярно поповнюємо наш
        асортимент новими моделями та брендами, щоб задовольнити потреби наших
        клієнтів.
        <br />
        <br />
        Ми готові запропонувати індивідуальні умови оптових замовлень для
        кожного клієнта, в залежності від обсягу та регулярності замовлень. Наші
        ціни на оптові замовлення є конкурентоспроможними.
        <br />
        <br />
        Для того, щоб зробити оптове замовлення в нашому інтернет-магазині,
        необхідно заповнити спеціальну форму, розміщену на сторінці. <br />У
        формі необхідно вказати ім'я контактної особи, телефон для зв'язку,
        модель пристрою та кількість одиниць пристрою.
        <br />
        Наші менеджери зв'яжуться з Вами для уточнення деталей замовлення та
        дадуть відповіді на всі ваші питання.
        <br />
      </span>
    </div>
  );
};

export default MainOptPage;
