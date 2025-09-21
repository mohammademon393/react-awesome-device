
import { Suspense } from 'react'
import './App.css'
import Devices from './Component/Devices/Devices'

function App() {

  // data load 
  const devicePromise = fetch('./device.json').then(res => res.json())
  

  return (
    <>
      <h1>React awesome device</h1>
      <Suspense fallback={<h3>Device data are loading...</h3>}>
        <Devices devicePromise={devicePromise}></Devices>
      </Suspense>
    </>
  );
}

export default App
