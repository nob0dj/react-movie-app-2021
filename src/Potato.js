import PropTypes from "prop-types";

function Potato({ name, picture, rating }) {
  const imgStyle = {
    width: "300px"
  };
  return (
    <div>
      <h2>I like {`${name} 😁`}</h2>
      <p>{rating}/5</p>
      <img src={picture} alt={name} style={imgStyle}/>
    </div>
  );
}

/**
 * 필수속성검사, 타입검사를 실행한다.
 * 
 * Component.propTypes = {객체}
 * 속성명 propTypes은 변경불가
 * 
 * https://reactjs.org/docs/typechecking-with-proptypes.html
 * ![콘솔로그](https://d.pr/i/6NmEu8+)
 */
Potato.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

export default Potato;