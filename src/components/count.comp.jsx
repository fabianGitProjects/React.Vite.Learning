import { useState } from "react";
import { Button } from "./button.component"
import "./Count.style.css";

export function Count() {

    const [count, setCount] = useState(0);

    const increaseHandler = () => {
        setCount ((prev) =>{
            return prev +1;
        })
    }
    const decreaseHandler = () => {
        setCount ((prev) =>{
            return prev -1;
        })
    }
    const resetHandler = () => {
        setCount (0)
    }


    

  return (
    <>
    <section className="count-section">
      <h3>{count}</h3>

      <div className="button-container"> 
        <Button text={"increase"} style={"btn-success"} eventHandler={increaseHandler}/>
        <Button text={"decrease"} style ={"btn-confirm"} eventHandler={decreaseHandler}/>
        <Button text={"reset"} style ={"btn-letsgo"}eventHandler={resetHandler}/>

      </div>
    </section>
    

</>
  );
}
