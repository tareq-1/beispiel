import React, { Component } from 'react';
import MyForm from './components/accountBox/SignupForm';
import MyComments from './components/MyComments/MyComments';
import AddImage from './components/accountBox/AddImage';
import LoginForm from './components/accountBox/LoginForm';

/* import './App.css'; */
class App extends Component {
  constructor(props) {


    super(props);

    this.state = {

      firstNameValue: 'tareq',
      lastNameValue: 'mshaal',
      emailValue: 'mashaaltareq@gmx.com',
      passwordValue1: 'fdgukJGJ@65432',
      passwordValue2: 'fdgukJGJ@654',
      file: '',

      comments: [
        {
          firstname: '',
          lastname: '',
          email: '',
          password: ''
        }
      ]
    }
  }

  formHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,

    })
  }

 /*  handleChange(event) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0])
    const base64ImageUrl = fileReader.result;
    this.setState({ file: base64ImageUrl })

  } */

  handleSubmit = async (event) => {
    console.log("here")
    event.preventDefault();

    const newUser = {
      firstName: this.state.firstNameValue,
      lastName: this.state.lastNameValue,
      email: this.state.emailValue,
      password: this.state.passwordValue1,
     /*  image: this.state.file, */
    }
    console.log(newUser)

    const resopse = await fetch('http://localhost:3001/users/new', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    })

    this.setState({
      comments: [newUser, ...this.state.comments]
    })
  }

  render() {
    return (
      <>
        <MyForm
          firstName={this.state.firstNameValue}
          lastName={this.state.lastNameValue}
          email={this.state.emailValue}
          password1={this.state.passwordValue1}
          password2={this.state.passwordValue2}
          formHandler={this.formHandler}
          handleSubmit={this.handleSubmit}
        />

        <AddImage
          handleChange={this.handleChange}
        />

        <LoginForm />

        <div>
          <input type="file" name="file" onChange={this.handleChange} />
          <img src={this.state.file} />
        </div>

        {/*    <MyComments
          items={this.state.comments}
        /> */}
      </>
    );
  }
}

export default App;
