import React, { useState } from 'react'
import style from './faq.module.css'

const Faq = ({id,question,answer}) => {
  const [toggle, setToggle]= useState (false);
  return (
    <article className={style.faq}>
      <div>
        <h4>{question}</h4>
        <button onClick={()=>setToggle(!toggle)}>answer</button>
      </div>
      {toggle===true && <p>{answer}</p>}
    </article>
  )
}

export default Faq;