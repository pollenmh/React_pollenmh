import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Hi from './Hi';
import './style.css';
import ToolTip1 from "./tooltip";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      arr1:[1,2,3,4,5,6,7,8,9]
    };
  }

handleclick(index,value)
{
console.log('Clicked..' + index);
let temp = this.state.arr1;
temp[index] = value;
this.setState({arr1:temp});
console.log(this.state.arr1);
}
  render() {
    
    return (
      <div>
        <Hello name={this.state.name}  />
        <Hi index={0} text="Zero" onMyClick={(input,value) => this.handleclick(input,value)}></Hi>
        <Hi index={1} text="One" onMyClick={(input,value) => this.handleclick(input,value)}></Hi>
        <Hi index={2} text="Two" onMyClick={(input,value) => this.handleclick(input,value)}></Hi>
        <Hi index={3} text="Three" onMyClick={(input,value) => this.handleclick(input,value)}></Hi>
        <Hi index={4} text="Four" onMyClick={(input,value) => this.handleclick(input,value)}></Hi>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
