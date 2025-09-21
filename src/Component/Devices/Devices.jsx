import { use } from "react";
import Device from "../Device/Device";


const Devices = ({ devicePromise }) => {

    const devices = use(devicePromise);  


  return (
    <div>
      <h3>Total devies: {devices.length}</h3>
      {devices.map((device) => (
        <Device key={device.id} device={device}></Device>
      ))}
    </div>
  );
};

export default Devices;