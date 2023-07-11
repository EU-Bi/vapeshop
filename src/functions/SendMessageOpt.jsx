import axios from "axios";

export const SendMessageOpt = ({phone, name, type, count}) => {
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
    const CHAT_ID = "-1001806287302";
    const URL_API = `https://api.telegram.org/bot${localStorage.token}/sendMessage`;
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
