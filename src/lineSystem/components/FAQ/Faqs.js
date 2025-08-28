import React from 'react'
import { faqData } from './FaqData'
import { useState } from 'react'
import Faq from './Faq';
import style from './faq.module.css'

const Faqs = () => {
  const [faq] = useState (faqData);
  return (
  <main className={style.container} > 
    <section className={style.faqs} >
      <h1>FAQ (Frequently Asked Questions) </h1>
      {faq.map(faq=> <Faq key={faq.id} {...faq} />)}
    </section>
  </main>
)}

export default Faqs