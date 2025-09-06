import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from "uuid";
import style from './InputCounter.module.css'

const InputCounter = (props) => {

   const [counter, setCounter] = useState(
{
  id: "" ,
  name: "",
  currentToken: 0,
  status: "Active", // active | stopped | break
  servedTokens: 0
}
);

const handleChange = (event) => {
  const { name, value } = event.target; 
  setCounter((old) => ({ ...old,[name]: value,                     
  }));
};
      
 const handleSubmit = (event) => {
  toast("Counter: ( "+ counter.name+ ") added");
  event.preventDefault();
  const newCounter = { ...counter, id: uuidv4() };

  // send same object to both
  props.counter(newCounter);
  props.summary(newCounter);

  setCounter({ name: "", currentToken: 0, servedTokens: 0, status: "Active", id: "" }); 
};

  return (
      <form className={style.form} onSubmit={handleSubmit}>
        <h2>Input counter</h2>
        <div className={style["form-field"]}>
            <label htmlFor='title'>Counter Name : </label> 
            <input type='text' id='id' name='name' value={counter.name}  onChange={(name)=> handleChange(name)} />
        </div>
        <button type='submit'>Add  </button>
        <ToastContainer />
      </form>
  )
}

export default InputCounter
