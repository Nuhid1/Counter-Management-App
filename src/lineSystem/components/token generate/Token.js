import React from 'react'
import style from './token.module.css'

const Token = ({ id, tokenName, currentToken, getToken }) => {
   
  return (
     <div>
        <button onClick={() => getToken(id)} className={style["generate-button"]}>{tokenName}</button>
         
     </div>
  )
}

export default Token;
