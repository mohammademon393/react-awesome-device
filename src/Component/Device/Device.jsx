

const Device = ({ device }) => {
    console.log(device);
    
  return (
    <div>
      <img src={device.image} alt="" />
      <h3>{device.model}</h3>
    </div>
  );
};

export default Device;