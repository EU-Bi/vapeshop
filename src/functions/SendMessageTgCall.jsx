import axios from "axios";

const SendMessageTgCall = ({ phone }) => {
  // const fetchEnvVariables = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_API_URL}sacbjascjancnjkackn`
  //     );
  //     const envVariables = response.data;
  //     localStorage.token = envVariables;
  //     // Дальнейшая обработка значений переменных окружения
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // fetchEnvVariables();
  const CHAT_ID = "-1001975343733";
  const URL_API = `https://api.telegram.org/bot5985181682:AAEEJgsSQtqJHJTnBlGhv7Pd7a1HOe1olh0/sendMessage`;
  let message = `<b>Заявка по номеру телефона (быстрый звонок)</b>\n`;
  message += `<b>Телефон:</b>${phone}\n`;

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

export default SendMessageTgCall;
