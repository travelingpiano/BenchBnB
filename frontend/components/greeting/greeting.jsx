import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  handlesubmit(e){
    this.props.logout();
  }


  render(){
    if(this.props.currentUser){
      return (
        <div>
          <h1>Welcome {this.props.currentUser.username}</h1>
          <Link  to="/" onClick={this.handlesubmit.bind(this)}>Log Out</Link>
        </div>
      );
    }else{
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      );
    }
  }
}

export default Greeting;
