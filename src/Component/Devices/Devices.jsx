import { use } from "react";
import Device from "../Device/Device";
import './Devices.css';


const Devices = ({ devicePromise }) => {

    const devices = use(devicePromise);  


  return (
    <div>
        <h3>Total devies: {devices.length}</h3>
      <div className="card-container">
        {devices.map((device) => (
          <Device key={device.id} device={device}></Device>
        ))}
      </div>
    </div>
  );
};

export default Devices;