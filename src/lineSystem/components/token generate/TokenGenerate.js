import React from 'react'
import Token from './Token'
import style from './token.module.css'

const TokenGenerate = (props) => {
  return (
    <div >
      <h2 className={style.header}>Click to Generate Token</h2>
     
        { props.token.map((token, index)=>
         <Token key={index}
          id={token.id}                
          tokenName={token.name}       
          currentToken={token.currentToken}
          getToken={props.getToken}  /> 
        )}
    </div>
  )
}

export default TokenGenerate;
