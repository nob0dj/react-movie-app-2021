import React from 'react';


export default class About extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return <h1>About</h1>;
  }
}