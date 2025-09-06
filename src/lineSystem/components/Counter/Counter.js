import React from 'react'

import style from './counter.module.css'

const Counter = (props) => {
    
    const {name, status, currentToken, servedTokens, id} = props.counter;

    const handleDelete = ()=>{
      props.deleteCounter(id);
    }
  return (
     <div key={id} className={style["counters-card"]}>
            <h3>Counter Name: ({name})</h3>
            <p>Status: {status}</p>
            <p>Current Token: {currentToken}</p>
            <p>Served Tokens: {servedTokens}</p>
            
     <div className={style["button-group"]}>
        <button className={style.button} onClick={() => props.servedToken(id)} disabled={currentToken === 0} >Call</button>
        <button className={style.button} onClick={() => props.stopStatus(id)} >Stop</button>
        <button className={style.button} onClick={handleDelete}>Delete</button>
    </div>
  </div> 
   
  )
}

export default Counter
