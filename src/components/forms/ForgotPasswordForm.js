import React from 'react';
import isEmail from 'validator/lib/isEmail';
import { Button, Form, Message } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';

class ForgotPasswordForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      data: { email: '' },
      loading: false,
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
      this.props.submit(this.state.data).catch((err) => {
        this.setState(() => ({
          errors: err.response.data.errors,
          loading: false
        }));
      });
    }
  }

  validate(data) {
    const errors = {};
    if (!isEmail(data.email)) errors.email = 'Invalid email';
    return errors;
  }

  render() {
    const { errors, data, loading } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} loading={loading}>
        {!!errors.globals && <Message negative>{errors.globals}</Message>}
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
        <Button primary>Send reset email</Button>
      </Form>
    );
  }
}

export default ForgotPasswordForm;
