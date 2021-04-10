import './App.css';
import React from 'react';

export default class App extends React.Component {
  state = {
    isLoading: true,
    renderTime: Date.now()
  }

  render(){
    const {isLoading, title} = this.state;
    return <div className="App">
      <h1>{title}</h1> {/* title이 undefined일경우 아무 text도 출력되지 않는다. */}
      <p>{isLoading ? "Loding..." : "Ready To Go!"}</p>
    </div>
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading: false,
        title: '늑대와 춤을' 
      });

      console.log(this.state); // {isLoading: false, renderTime: 1618039328811, title: "늑대와 춤을"}
    }, 3000);
  }
}