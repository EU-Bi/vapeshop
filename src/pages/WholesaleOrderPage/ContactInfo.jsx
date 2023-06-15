import axios from "axios";
import React, { useEffect, useState } from "react";

const ContactInfo = () => {
  const [regions, setRegions] = useState([]);
  const [currentRegion, setCurrentRegion] = useState("");
  const [cites, setCites] = useState([]);
  const [currentCity, setCurrentCity] = useState("");
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState("");
  useEffect(() => {
    axios
      .post("https://api.novaposhta.ua/v2.0/json/", {
        apiKey: "fba38a75ee85aab40b94b4fa003f9e3e",
        modelName: "Address",
        calledMethod: "getAreas",
        methodProperties: {},
      })
      .then((res) => setRegions(res.data.data));
  });

  useEffect(() => {
    axios
      .post("https://api.novaposhta.ua/v2.0/json/", {
        apiKey: "fba38a75ee85aab40b94b4fa003f9e3e",
        modelName: "Address",
        calledMethod: "getCities",
        methodProperties: {
          FindByString: currentCity,
          Limit: "20",
        },
      })
      .then((res) => {
        setCites(res.data.data);
      });
    axios
      .post("https://api.novaposhta.ua/v2.0/json/", {
        apiKey: "fba38a75ee85aab40b94b4fa003f9e3e",
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
          CityName: currentCity,
          Limit: "50",
          Language: "UA",
          WarehouseId: currentPost,
        },
      })
      .then((res) => setPosts(res.data.data));
  }, [currentCity, currentPost]);

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
            <select
              name="select"
              className="location"
              value={currentRegion}
              onChange={(e) => setCurrentRegion(e.target.value)}
            >
              {regions.map((region) => (
                <option key={region.id}>{region.Description}</option>
              ))}
            </select>
          </div>
          <div className="wrapInputLabel">
            <label htmlFor="">Місто</label>
            <input
              type="text"
              placeholder="Введіть своє місто"
              list="cityname"
              value={currentCity}
              onChange={(e) => setCurrentCity(e.target.value)}
            />
            <datalist id="cityname">
              {cites.map((city) => (
                <option key={city.id}>{city.Description}</option>
              ))}
            </datalist>
          </div>
          <div className="wrapInputLabel">
            <label htmlFor="">Відділення</label>
            <input
              type="text"
              className="sending"
              list="postlist"
              value={currentPost}
              onChange={(e) => setCurrentPost(e.target.value)}
            ></input>
            <datalist id="postlist">
              {posts.map((post) => (
                <option key={post.id}>{post.Description}</option>
              ))}
            </datalist>
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
