import React,{ Component } from 'react';

class Hi extends Component
{
  render()
  {
return(<h1  onClick={() => this.props.onMyClick(this.props.index,0)}>{this.props.text}</h1>)
  }
}

export default Hi