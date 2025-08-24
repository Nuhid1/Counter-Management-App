import React from 'react'
import Counter from './Counter';
import style from './counter.module.css'

const CounterGenerate = (props) => {
  
  return (
      <div >
        <h1 className={style.header}>Counter Manager</h1>
        <div className={style["counters-list"]}>
       {
        props.counter.map((counter)=>
          <Counter key={counter.id}
          id={counter.id}                       
          counter={counter}
          servedToken={props.servedToken}
          stopStatus={props.stopStatus}
          deleteCounter={props.deleteCounter} />  
      )}
        </div>
        
      </div>
       
  )
}

export default CounterGenerate;
