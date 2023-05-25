import './App.css'
import LightOnImg from './assets/lighton.png'
import LightOffImg from './assets/lightoff.png'
import { useState } from 'react'

function App() {

  return (
    <>
      <Light />
    </>
  )
}

// 1. Vamos a transofrmar la parte estática en una parte dinámica usando el useState, PERO sin usar eventos

function Light() {

  // El estado de nuestra app, es que al principio, la bombilla está apagada
  // off: apagada
  // on: encendida
  const [statusLight, setStatusLight] = useState("on")

  function handleLightOn() {
    setStatusLight("on");
  }

  function handleLightOff() {
    setStatusLight("off");
  }

  return <div>
    <h1>Click the buttons to turn on or off the light</h1>
    <img src={statusLight === 'on' ? LightOnImg : LightOffImg} />
    <div>
      <button onClick={handleLightOn} style={{
        display: statusLight == "on" ? 'none' : 'inline'
      }}>Turn On</button>
      <button onClick={handleLightOff} style={{
        display: statusLight == "on" ? 'inline' : 'none'
      }}>Turn Off</button></div>
  </div>
}

export default App
