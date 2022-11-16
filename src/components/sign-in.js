import React, { Component } from "react"
import Img from '../assets/icon.png'
import { Div, Icon, Text, Form, Input, Button, Link, LinkA } from './styles'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: ''
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePass = this.handleChangePass.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeEmail(e) {
    this.setState({value1: e.target.value});
  }
  
   handleChangePass(e) {
    this.setState({value2: e.target.value});
  }

  handleSubmit(e) {
    console.log(`
    Email: ${this.state.value1}
    Password: ${this.state.value2}`);
    e.preventDefault();
  }

  render() {
    return (
  
      <Div>
        <Icon src={Img}></Icon>
        <Text>Sign In</Text>
      <Form onSubmit={this.handleSubmit}>
        <Input type="email" placeholder="email" value={this.state.value1} onChange={this.handleChangeEmail} />
        <Input type="text" placeholder="password" value={this.state.value2} onChange={this.handleChangePass} />
    
        <Button type="submit" value="Submit"> Submit </Button>

        <Link><LinkA href="/log-forms/#/sign-up">Don't have an account? Sign up</LinkA></Link>
      </Form>
    </Div>
      
    );
  }
}



export default SignIn