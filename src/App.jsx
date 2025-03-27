import { useState } from 'react'
import './App.css'

function App() {
  const[height,setHeight]=useState("")
  const [weight,setWeight]=useState("") 
  const [bmi,setBmi]=useState(null) 
  const[bmiStatus,setBmistatus]=useState("")
  const [errormsg,setErrormsg]=useState("")
  function calculateBmi(){
    const isvalidWeight=/^\d+$/.test(weight)
    const isvalidHeight=/^\d+$/.test(height)

    if(isvalidHeight&& isvalidWeight){
      const heightinmeters=height/100;
      const bmiValue=weight/(heightinmeters*heightinmeters)
      setBmi(bmiValue.toFixed(2))
      if(bmiValue<18.5){
        setBmistatus("Under Weight")
      }
      else if(bmiValue>=18.5 && bmiValue<24.9){
        setBmistatus("Normal Weight")
      }
      else if(bmiValue>=25 && bmiValue<29.9){
        setBmistatus("Over Weight")
      }
      else{
        setBmistatus("Obesity")
      }
      setErrormsg("")
    }
    else{
      setBmi(null)
      setBmistatus("")
      setErrormsg("Please enter valid numeric values for height and weight.")
    }
  }
  function clearAll(){
    setHeight("")
    setWeight("")
    setBmi(null)
    setBmistatus("")

  }
    return (
    <>
    <div className='bmi-calculator'>
      <div className="box"></div>
      <div className="data">
        <h1>BMI Calculator</h1>
       {errormsg && <p className='error'>{errormsg}</p>}
        <div className="input-container">
          <label htmlFor="height">Height(cm)</label>
          <input type="text"  id='height' value={height} onChange={(e)=>setHeight(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="weight">Weight(kg)</label>
          <input type="text"  id='weight' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
        </div>
        <button onClick={calculateBmi}>Calculate BMI</button>
        <button onClick={clearAll}>Clear</button>
        {
          bmi!==null && (
            <div className="result">
            <p>Your BMI is: {bmi}</p>
            <p>Status: {bmiStatus}</p>
          </div>  
          )
        }
      </div>

    </div>
    </>
  )
}

export default App
