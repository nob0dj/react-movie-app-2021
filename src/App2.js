import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log("App constructed!");
  }

  state = {
    count : 0
  };

  /**
   * setState(state object)를 사용해야 render메소드가 호출된다.
   */
  plus = () => {
    // console.log(this.state.count++); //!  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    // this.setState({ count: 100 });
    /**
     * best practice
     * 함수에 전달되는 current는 this.state이다.
     */
    this.setState(current => ({
      count: ++current.count  // 전위증감연산자만 가능
    }));
  };
  
  minus = () => {
    // console.log(this.state.count--); //!  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    // this.setState({ count: -100 });
    this.setState(current => ({
      count: --current.count
    }));
  };

  foo(e){
    console.log(e.target); // <h1></h1>
    e.target.style.color = '#f00';
  }
  bar(e){
    console.log(e.target);
    e.target.style.color = '#000';
  }

  render(){
    console.log("render");
    return <div className="App">
      <h1 onMouseEnter={this.foo} onMouseLeave={this.bar} >Hello {this.state.count}</h1>
      <input type="button" onClick={this.plus} value="plus"/>
      <input type="button" onClick={this.minus} value="minus"/>
    </div>
  }

  componentDidMount(){
    console.log("componentDidMount!");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }


}

export default App;

