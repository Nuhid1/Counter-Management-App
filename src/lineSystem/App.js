import React from "react";
import { useState } from "react";
import "./App.css" 
import InputCounter from "./components/input counter/InputCounter";
import TokenGenerate from "./components/token generate/TokenGenerate";
import CounterGenerate from "./components/Counter/CounterGenerate";
import Summary from "./components/summary/Summary";
import Faqs from "./components/FAQ/Faqs";

function App() {
  
  const [counter, setCounter] = useState ([]);
  const [summary, setSummary] = useState ([]);

  const handleCounter = (event)=>{
    setCounter((prev)=> [...prev, event])
  }

  const handleSummary = (event)=>{
    setSummary((prev)=> [...prev, event])
  }
 
  const getToken = (id)=>{
    setCounter ((prev)=>(
    prev.map((counter)=>(
      counter.id === id ? { 
            ...counter, currentToken: (counter.currentToken || 0) + 1 } : counter
  
    ))
    ));
    setSummary ((prev)=>(
    prev.map((counter)=>(
      counter.id === id ? { 
            ...counter, currentToken: (counter.currentToken || 0) + 1 } : counter
  
    ))
    ))
  };

  const servedToken = (id) => {
  setCounter((prev) =>
    prev.map((counter) =>
      counter.id === id
        ? {
            ...counter,
            currentToken: counter.currentToken ? counter.currentToken - 1 : 0,
            servedTokens: counter.currentToken!== 0 ? (counter.servedTokens || 0) + 1 : counter.servedTokens,
            status : counter.currentToken!== 0 ? "Active" : counter.status
          }
        : counter
    )
  );
  setSummary((prev) =>
    prev.map((counter) =>
      counter.id === id
        ? {
            ...counter,
            servedTokens: counter.currentToken!== 0 ? (counter.servedTokens || 0) + 1 : counter.servedTokens,
            status : counter.currentToken!== 0 ? "Active" : counter.status
          }
        : counter
    )
  );
};

  const handleStatus = (id)=>{
    setCounter ((prev)=>(
    prev.map((counter)=>(
      counter.id === id ? { 
            ...counter, status: "Stopped" } : counter 
    ))
    ))
    setSummary ((prev)=>(
    prev.map((counter)=>(
      counter.id === id ? { 
            ...counter, status: "Stopped" } : counter 
    ))
    ))
  };

  const deleteCounter = (id)=>{
    setSummary ((prev)=>(
    prev.map((counter)=>(
      counter.id === id ? { 
            ...counter, status: "Deleted" } : counter 
    ))
    ))
    setCounter ((prev)=>
      counter.filter((counter)=> counter.id !== id ) 
      )
    
  }

  return (
    
    <div className="App">
      <header>
        <h1> Counter Management System</h1>
      </header>
      
      <div>
        <InputCounter summary={handleSummary} counter={handleCounter} />
      </div>

      <div>
        <TokenGenerate getToken={getToken} token={counter} />
      </div>

      <div>
        <CounterGenerate deleteCounter={deleteCounter} servedToken={servedToken} counter={counter} stopStatus={handleStatus} />
      </div>

      <div>
        <Summary summary={summary} />
      </div>
     
      <div>
        <Faqs />
      </div> 
     
    </div>
   );
  
}

export default App;