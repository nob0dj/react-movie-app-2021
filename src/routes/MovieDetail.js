import React from "react";

function MovieDetail(props) {
  console.log(props);
  const { location, history } = props;
  if (location.state !== undefined) {
    return <h1>hello movie-detail</h1>;
  } else {
    history.push("/"); /* Home.js로 리다이렉트처리함. */
    return null; /* 반드시 component 또는 null을 리턴할 것 */
  }
}

export default MovieDetail;
