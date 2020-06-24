import React,{ Component } from 'react';
import Tooltip1 from './tooltip';

class Hi extends Component
{
  constructor()
  {
    super();
    this.state={display:0};
  }

  localhandler()
  {
   //alert('layover..');
   let temp = this.state.display;
   this.setState({display:!temp});
  }

  render()
  {
    const display = this.state.display;
    let showtooltip;
{if(display)
{
showtooltip = <Tooltip1/>;
}}

return(
   <div><h1  onClick={() =>{this.localhandler();this.props.onMyClick(this.props.index,0)}}>{this.props.text}</h1>
{showtooltip}
</div>


)
  }
}

export default Hi