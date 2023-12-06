import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("red")

  return (

    <div id='container' style={ {backgroundColor : color }}>
    <div id='full-btn'>
        <button onClick={ () =>setColor("red")} type="button" style={{backgroundColor: "red"}}>Red</button>
        <button onClick={ () =>setColor("green")} type="button" style={{backgroundColor: "green"}}>Green</button>
        <button onClick={ () =>setColor("blue")} type="button" style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick={ () =>setColor("pink")} type="button" style={{backgroundColor: "pink"}}>Pink</button>
        <button onClick={ () =>setColor("yellow")} type="button" style={{backgroundColor: "yellow"}}>Yellow</button>
        <button onClick={ () =>setColor("white")} type="button" style={{backgroundColor: "white" , color : "black"}}>White</button>
        <button onClick={ () =>setColor("cyan")} type="button" style={{backgroundColor: "cyan"}}>Cyan</button>
        <button onClick={ () =>setColor("grey")} type="button" style={{backgroundColor: "grey"}}>Grey</button>
        <button onClick={ () =>setColor("black")} type="button" style={{backgroundColor: "black"}}>Black</button>
        <button onClick={ () =>setColor("skyBlue")} type="button" style={{backgroundColor: "skyBlue"}}>SkyBlue</button>
        <button onClick={ () =>setColor("purple")} type="button" style={{backgroundColor: "purple"}}>Purple</button>


    </div>

    </div>
  )
}

export default App
