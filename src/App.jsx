
import './App.css'

function App() {

  // data load 
  const devicePromise = fetch('./device.json').then(res => res.json()).then(data => console.log(data)
  )
  console.log(devicePromise);
  

  return (
    <>
      <h1>React awesome device</h1>
      
    </>
  )
}

export default App
