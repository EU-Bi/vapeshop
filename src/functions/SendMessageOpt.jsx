import axios from "axios";

export const SendMessageOpt = ({phone, name, type, count}) => {
    const TOKEN = "5985181682:AAEEJgsSQtqJHJTnBlGhv7Pd7a1HOe1olh0";
    const CHAT_ID = "-1001806287302";
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    let message = `<b>Оптовый клиент</b>\n`;
    message += `<b>Телефон:</b>${phone}\n`;
    message += `<b>ФИО:</b>${name}\n`;
    message += `<b>Типы:</b>${type}\n`;
    message += `<b>Количество:</b>${count}\n`;
  
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
}
