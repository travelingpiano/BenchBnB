import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handlesubmit = this.handlesubmit.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  changeUsername(e){
    this.setState({username: e.target.value});
  }

  changePassword(e){
    this.setState({password: e.target.value});
  }

  handlesubmit(e){
    e.preventDefault();
    const user = {user: this.state};
    this.props.processForm(user);
  }

  render(){
    let direct_to = this.props.formType === '/signup' ? 'login' : 'signup';
    let display = {};
    if(this.props.loggedIn){
      display = (<Redirect to="/" />);
    }else{
      display = (
        <form onSubmit={this.handlesubmit}>
          <Link to={`/${direct_to}`}>{direct_to} instead?</Link>
          <h1>{this.props.formType}</h1>
          <p>{this.props.errors}</p>
          <label>Username</label>
          <input value={this.state.username} onChange={this.changeUsername}></input>
            <label>Password</label>
            <input value={this.state.password} onChange={this.changePassword}></input>
            <input value={this.props.formType} type="submit"></input>
        </form>
      );
    }
    return (
      <div>
        {display}
      </div>
    );
  }
}

export default withRouter(SessionForm);
