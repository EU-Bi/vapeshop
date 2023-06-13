import axios from "axios";

const SendMessageTgCall = ({ phone }) => {
  const TOKEN = "5985181682:AAEEJgsSQtqJHJTnBlGhv7Pd7a1HOe1olh0";
  const CHAT_ID = "-1001975343733";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  let message = `<b>Заявка по номеру телефона (быстрый звонок)</b>\n`;
  message += `<b>Телефон:</b>${phone}\n`;

  axios.post(URL_API, {
    chat_id:CHAT_ID,
    parse_mode: 'html',
    text:message
  })
  .then((res)=>{

  })
  .catch((err)=>{
    console.error(err)
  })
  .finally(()=>{
    console.log('Good!!!')
  })
};

export default SendMessageTgCall;
