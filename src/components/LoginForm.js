import React from 'react';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      loading: false,
      data: {
        email: '',
        password: ''
      },
      errors: {}
    };
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(() => ({
      data: { ...this.state.data, [name]: value }
    }));
  }

  render() {
    const { data } = this.state;
    return (
      <form>
        <div className={'form-group'}>
          <label htmlFor="email">
          Email
          <input value={data.email} onChange={this.handleChange} name="email" id="email" placeholder="example@gmail.com" type="email" />
          </label>
        </div>
        <div className={'form-group'}>
          <label htmlFor="password">
          Password
          <input value={data.password} onChange={this.handleChange} name="password" id="password" placeholder="123456" type="password" />
          </label>
        </div>
      </form>
    );
  }
}

export default LoginForm;
