import { Component } from "react";


class Message extends Component
{

constructor()
{
    super()
    this.state={
        message:'Hello Students'
    }
}

ChangeMessage()
{
    this.setState({
        message:'You are placed'
    })
}
    render()
    {
        return(
        <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.ChangeMessage()}>Click Me</button>
        </div>
        )
        
    }
}

export default Message