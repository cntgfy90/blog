import React from 'react';
import isEmail from 'validator/lib/isEmail';
import { Button, Form, Message } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';
import '../../styles/components/forms/LoginForm.css';

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
      this.setState(() => ({ loading: true }));
      this.props.submit(this.state.data).catch(({data}) => {
        this.setState(() => ({
          errors: data.errors.globals,
          loading: false
        }));
      });
    }
  }

  validate(data) {
    const errors = {};
    if (!isEmail(data.email)) errors.email = 'Invalid email';
    if (!data.password) errors.password = 'Invalid password';
    return errors;
  }

  render() {
    const { data, errors, loading } = this.state;
    const { user } = this.props;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form" loading={loading}>
        {user.didInvalidate && <InlineError text={'Something wrong with credentials'} error={user.info.data.errors.globals} />}
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="example@gmail.com"
            value={data.email}
            type="email"
            onChange={this.handleChange}
            name="email"
            />
          {errors.email && (
            <InlineError text={'Invalid email'} />
          )}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label>Password</label>
          <input
            id="password"
            placeholder="Make it secure"
            value={data.password}
            type="password"
            onChange={this.handleChange}
            name="password"
            />
            {errors.password && (
              <InlineError text={'Invalid password'} />
            )}
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default LoginForm;
