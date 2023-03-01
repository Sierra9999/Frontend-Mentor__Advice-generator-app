import React from 'react';
import Dice from "./Icons/icon-dice.svg"
import './App.scss';

interface Slip {
  slip : {
    id : number 
    advice : string
  }
}

function App() {


  const [advice, setAdvice] = React.useState<Slip>()

    async function getAdvice(){
      const request = await fetch("https://api.adviceslip.com/advice")
      const response = await request.json().then((data) =>{setAdvice(data)})
      console.log("async func")
    }

  React.useEffect(()=>{
    getAdvice()
    console.log("useEffect");
  },[])

  return (
    <div className="App App-header">
      <section className="advice-card">
        <h4 className="advice-card__advice-id">{advice ? `ADVICE #${advice.slip.id}` : "ADVICE # 000"}</h4>

        <p className="advice-card__advice">{`"${advice?.slip.advice}"`}</p>

        <hr />

        <button 
        onClick={getAdvice}
        className="advice-card__reroll-buton">
          <img src={Dice} alt="" /></button>

      </section>
    </div>
  );
}

export default App;
