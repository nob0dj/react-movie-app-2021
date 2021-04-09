function Potato({ name, picture }) {
  const imgStyle = {
    width: "300px"
  };
  return (
    <div>
      <h2>I like {`${name} 😁`}</h2>
      <img src={picture} alt={name} style={imgStyle}/>
    </div>
  );
}

export default Potato;