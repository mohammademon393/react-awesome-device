import { use } from "react";


const Devices = ({ devicePromise }) => {

    const devices = use(devicePromise);
    console.log(devices);
    


  return (
    <div>
      <h3>deviessss data file</h3>
    </div>
  );
};

export default Devices;