import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import ConfirmationPageMain from './ConfirmationPageMain'

const ConfirmationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="backgroundColor">
        <Header/>
        <ConfirmationPageMain/>x
    </div>
  )
}

export default ConfirmationPage