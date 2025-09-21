import './Device.css';

const Device = ({ device }) => {
    console.log(device);
    
  return (
    <div className="card">
      <img src={device.image} alt="" />
      <h3>{device.model}</h3>
    </div>
  );
};

export default Device;