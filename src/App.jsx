
import './App.css'

function App() {

  // data load 
  const devicePromise = fetch('./device.json').then(res => res.json())
  

  return (
    <>
      <h1>React awesome device</h1>
      
    </>
  )
}

export default App
