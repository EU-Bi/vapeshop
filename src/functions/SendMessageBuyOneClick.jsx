import axios from "axios";

const SendMessageBuyOneClick = (phone, name, type, count) => {
  const fetchEnvVariables = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}sacbjascjancnjkackn`
      );
      const envVariables = response.data;
      localStorage.token = envVariables;
      // Дальнейшая обработка значений переменных окружения
    } catch (error) {
      console.error(error);
    }
  };
  fetchEnvVariables();
  let newDevice = {
    brand: type.brand,
    model: type.model.title,
    price: type.model.price,
    newPrice: type.model.newPrice,
    taste: type.taste.title,
  };
  const CHAT_ID = "-1001942348301";
  const URL_API = `https://api.telegram.org/bot${localStorage.token}/sendMessage`;
  let message = `<b>Купить в один клик</b>\n`;
  message += `<b>ФИО:</b>${name}\n`;
  message += `<b>Телефон:</b>${phone}\n`;
  message += `<b>Тип дудки:</b>${JSON.stringify(newDevice)}\n`;
  message += `<b>Количество:</b>${count}\n`;

  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {})
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log("Good!!!");
    });
};

export default SendMessageBuyOneClick;
