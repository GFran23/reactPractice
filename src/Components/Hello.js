//stateful component
import React, { Component } from 'react'; // importing react and the component feature from react 

class Hello extends Component { // creating a class called hello extends our compenent
    state = {
        formal: true
    };

    swapper = () => {
        console.log(this.state)
        this.setState({
            formal: !this.state.formal
        })
    }

    render(){ //changing some features using render which is a preset function
        return (
              <div>
               {this.state.formal ? 
               <h1>Hi Mr.{ this.props.userInfo.lastName } from the Hello Component!</h1>:
                <h1>Hi { this.props.userInfo.firstName } from Hello Component!</h1>
               
            
            }
                <button onClick={this.swapper}><h1>Click Me</h1></button>
                </div>
        
        )
    }
}

export default Hello; // exporting hello Class