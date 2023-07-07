import axios from "axios";

const SendMessageBuy = (
  name,
  surname,
  type,
  phone,
  basket,
  post,
  region,
  text,
  city,
  total
) => {
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
  const CHAT_ID = "-1001765784132";
  const URL_API = `https://api.telegram.org/bot${localStorage.token}/sendMessage`;
  let message = `<b>Купить в один клик</b>\n`;
  message += `<b>ФИО:</b>${name} ${surname}\n`;
  message += `<b>Телефон:</b>${phone}\n`;
  basket.forEach((item) => {
    let newDevice = {
      brand: item.device.brand,
      model: item.device.model.title,
      price: item.device.model.price,
      newPrice: item.device.model.newPrice,
      taste: item.device.taste.title,
      count: item.countDevice,
    };
    return (message += `<b>Дудка:</b>${JSON.stringify(newDevice)}\n`);
  });
  message += `<b>Тип доставки:</b>${type}\n`;
  message += `<b>Куда:</b>${post}, ${city}, ${region}\n`;
  message += `<b>Доп текст:</b>${text}\n`;
  message += `<b>Сумма:</b>${total}\n`;

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

export default SendMessageBuy;
