import React, { Component } from "react"
import Img from '../assets/icon.png'
import { Div, Icon, Text, Form, Input, InputHalf, Button, Link, LinkA } from './styles'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
    };

    this.handleChangeFirstname = this.handleChangeFirstname.bind(this)
    this.handleChangeLastname = this.handleChangeLastname.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePass = this.handleChangePass.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  
  handleChangeFirstname(e) {
    this.setState({value1: e.target.value});
  }

  handleChangeLastname(e) {
    this.setState({value2: e.target.value});
  }

  handleChangeEmail(e) {
    this.setState({value3: e.target.value});
  }
  
   handleChangePass(e) {
    this.setState({value4: e.target.value});
  }

  handleSubmit(e) {
   console.log(`
   First Name: ${this.state.value1}
   Last Name: ${this.state.value2}
   Email: ${this.state.value3}
   Password: ${this.state.value4}`);
    e.preventDefault();
  }

  render() {
    return (
  
      <Div>
        <Icon src={Img}></Icon>

        <Text>Sign Up</Text>

      <Form onSubmit={this.handleSubmit}>
        <InputHalf type="text" placeholder="First Name" value={this.state.value1} onChange={this.handleChangeFirstname} />
        <span> </span>
        <InputHalf type="text" placeholder="Last Name" value={this.state.value2} onChange={this.handleChangeLastname} />
        <Input type="email" placeholder="email" value={this.state.value3} onChange={this.handleChangeEmail} />
        <Input type="text" placeholder="password" value={this.state.value4} onChange={this.handleChangePass} />
    
        <Button type="submit" value="Submit"> Submit </Button>

        <Link><LinkA href="/log-forms/#/sign-in"> Already have an account? Sign in </LinkA></Link>
      </Form>
    </Div>
      
    );
  }
}



export default SignUp