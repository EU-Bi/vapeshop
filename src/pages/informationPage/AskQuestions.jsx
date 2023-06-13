import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import MainAskQuestions from './MainAskQuestions'
import Telephone from '../../components/telephone/Telephone'

const AskQuestions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='backgroundCatalog'>
        <Header/>
        <MainAskQuestions/>
        <Footer/>
        <Telephone/>
    </div>
  )
}

export default AskQuestions