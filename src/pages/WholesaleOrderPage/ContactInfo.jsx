import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import store from "../../redux/store/store";
import {
  actionSetCity,
  actionSetName,
  actionSetPhone,
  actionSetPost,
  actionSetRegion,
  actionSetSurname,
  actionSetTypePaid,
} from "../../redux/actions/ActionForm";
import convertPhoneNumber from "../../functions/ConvertPhone";

const ContactInfo = ({ form }) => {
  const [regions, setRegions] = useState([]);
  const [currentRegion, setCurrentRegion] = useState("");
  const [cites, setCites] = useState([]);
  const [currentCity, setCurrentCity] = useState("");
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

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
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                store.dispatch(actionSetName(e.target.value));
              }}
              required
            />
          </div>
          <div className="wrapInputLabel">
            <label htmlFor="">Прізвище</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value);
                store.dispatch(actionSetSurname(e.target.value));
              }}
              required
            />
          </div>
          <div className="wrapInputLabel">
            <label htmlFor="">Номер телефону</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(convertPhoneNumber(e.target.value));
                store.dispatch(actionSetPhone(convertPhoneNumber(e.target.value)));
              }}
              required
            />
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
              onChange={(e) => {
                setCurrentRegion(e.target.value);
                store.dispatch(actionSetRegion(e.target.value));
              }}
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
              required
              list="cityname"
              value={currentCity}
              onChange={(e) => {
                setCurrentCity(e.target.value);
                store.dispatch(actionSetCity(e.target.value));
              }}
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
              required
              list="postlist"
              value={currentPost}
              onChange={(e) => {
                setCurrentPost(e.target.value);
                store.dispatch(actionSetPost(e.target.value));
              }}
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
        <form className="radio">
          <div className="wrapRadio">
            <input
              type="radio"
              name="typePaid"
              id="forCard"
              onChange={(e) => store.dispatch(actionSetTypePaid(e.target.id))}
            />
            <label htmlFor="forCard">Переказ на картку</label>
          </div>
          <div className="wrapRadio">
            <input
              type="radio"
              name="typePaid"
              id="forSending"
              onChange={(e) => store.dispatch(actionSetTypePaid(e.target.id))}
            />
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

export default connect((state) => ({ form: state.form }))(ContactInfo);
