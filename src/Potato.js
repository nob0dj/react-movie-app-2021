import PropTypes from "prop-types";

function Potato({ name, picture, rating }) {
  const imgStyle = {
    width: "300px"
  };
  return (
    <div>
      <h2>I like {`${name} ๐`}</h2>
      <p>{rating}/5</p>
      <img src={picture} alt={name} style={imgStyle}/>
    </div>
  );
}

/**
 * ํ์์์ฑ๊ฒ์ฌ, ํ์๊ฒ์ฌ๋ฅผ ์คํํ๋ค.
 * 
 * Component.propTypes = {๊ฐ์ฒด}
 * ์์ฑ๋ช propTypes์ ๋ณ๊ฒฝ๋ถ๊ฐ
 * 
 * https://reactjs.org/docs/typechecking-with-proptypes.html
 * ![์ฝ์๋ก๊ทธ](https://d.pr/i/6NmEu8+)
 */
Potato.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

export default Potato;