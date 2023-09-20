import React, { Component } from 'react'

import loginStyles from './loginStyles.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
    }
  }

  // Handle changes in the input fields
  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  // Handle the form submission
  handleSubmit = (event) => {
    event.preventDefault()
    const { username, password } = this.state

    // In a real application, you would send a request to your server to validate the login credentials.
    // For this example, we'll simulate a successful login if both fields are filled.
    if (username && password) {
      this.setState({ loggedIn: true })
      alert('Login successful!')
    } else {
      alert('Please fill in both username and password.')
    }
  }

  render() {
    const { username, password, loggedIn } = this.state

    // If the user is logged in, display a welcome message
    if (loggedIn) {
      return (
        <div>
          <h2>Welcome, {username}!</h2>
        </div>
      )
    }

    // If the user is not logged in, display the login form
    return (
      <div className="loginStyles" styles={loginStyles}>
        <div className="title"></div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
