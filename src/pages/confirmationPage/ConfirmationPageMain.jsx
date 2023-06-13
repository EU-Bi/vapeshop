import React from 'react'
import { Link } from 'react-router-dom'
import './ConfirmationPageMain.scss'

const ConfirmationPageMain = () => {
  return (
    <div className='wrapConfirmation'>
        <div className="svgApprove"></div>
        <h1>Дякуємо! Ваше замовлення прийнято!</h1>
        <span>Ваше замовлення успішно оформлене та передане в обробку. <br/>
Протягом 30 хвилин з вами зв’яжеться наш менеджер. <br/>
Реквізити для переказу суми замовлення будуть надіслані на ваш номер телефону.</span>
        <Link to={'/'}>Повернутись  на головну сторінку</Link>
    </div>
  )
}

export default ConfirmationPageMain