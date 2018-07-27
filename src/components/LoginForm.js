import React from 'react';
import Validator from 'validator';
import InlineError from './InlineError';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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

  handleSubmit(e) {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState(() => ({ errors }));
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  }

  validate(data) {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = 'Invalid email';
    if (!data.password) errors.password = 'Invalid password';
    return errors;
  }

  render() {
    const { data, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={'form-group'}>
          <label htmlFor="email">
          Email
          <input value={data.email} onChange={this.handleChange} name="email" id="email" placeholder="example@gmail.com" type="email" />
          {errors.email && <InlineError text={errors.email} />}
          </label>
        </div>
        <div className={'form-group'}>
          <label htmlFor="password">
          Password
          <input value={data.password} onChange={this.handleChange} name="password" id="password" placeholder="Make it secure" type="password" />
          {errors.password && <InlineError text={errors.password} />}
          </label>
        </div>
        <input type="submit" />
      </form>
    );
  }
}

export default LoginForm;
