import React from 'react';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import { Button, Form, Message, Container } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';
import '../../styles/components/forms/LoginForm.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      data: {
        token: this.props.token,
        password: '',
        passwordConfirmation: ''
      },
      errors: {},
      loading: false
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
    if (!data.password) errors.password = 'Can\'t be blank.';
    if (data.password !== data.passwordConfirmation) errors.passwordConfirmation = 'Passwords must match.';
    return errors;
  }

  render() {
    const { data, errors, loading } = this.state;
    const { user } = this.props;

    return (
      <Container fluid className="reset__form-wrapper">
      <Form onSubmit={this.handleSubmit} loading={loading} className="reset__form">
        {!!errors.globals && <Message negative>{errors.globals}</Message>}
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">New password</label>
          <input
            id="password"
            placeholder="Make it secure"
            value={data.password}
            type="password"
            onChange={this.handleChange}
            name="password"
            />
          {!!errors.password && (<InlineError text={errors.password} />)}
        </Form.Field>
        <Form.Field error={!!errors.passwordConfirmation}>
          <label htmlFor="passwordConfirmation">Confirmation password</label>
          <input
            id="passwordConfirmation"
            placeholder="Confirm your password"
            value={data.email}
            type="password"
            onChange={this.handleChange}
            name="passwordConfirmation"
            />
          {!!errors.passwordConfirmation && (<InlineError text={errors.passwordConfirmation} />)}
        </Form.Field>
        <Button primary>Reset password</Button>
      </Form>
      </Container>
    );
  }
}

export default LoginForm;
