
import { Suspense } from 'react'
import './App.css'
import Devices from './Component/Devices/Devices'
import Header from './Component/Header/Header';

function App() {

  // data load 
  const devicePromise = fetch('./device.json').then(res => res.json())
  

  return (
    <>
      <Header></Header>
      <Suspense fallback={<h3>Device data are loading...</h3>}>
        <Devices devicePromise={devicePromise}></Devices>
      </Suspense>
    </>
  );
}

export default App
