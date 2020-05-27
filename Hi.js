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
   this.state={display:1};
  }

  render()
  {
return( <div><h1  onClick={() =>{this.localhandler();this.props.onMyClick(this.props.index,0)}}>{this.props.text}</h1>
<Tooltip1/>
</div>


)
  }
}

export default Hi