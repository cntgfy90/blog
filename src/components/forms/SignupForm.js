import React from 'react';
import isEmail from 'validator/lib/isEmail';
import { Form, Button, Container } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';
import '../../styles/components/forms/SignupForm.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
        data: {
          email: '',
          password: ''
        },
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
    const errors =this.validate(this.state.data);
    this.setState(() => ({ errors }));
    if (Object.keys(errors).length === 0) {
      this.setState(() => ({ loading: true }));
      this.props.submit(this.state.data).catch(({data}) => {
        console.log(data);
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
    return (
      <Container fluid className="signup__form-wrapper">
        <Form className="signup-form" onSubmit={this.handleSubmit} loading={loading}>
          <Form.Field error={!!errors.email}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={data.email}
              placeholder="example@gmail.com"
              onChange={this.handleChange}
            />
            {errors.email && <InlineError text={errors.email} />}
          </Form.Field>
          <Form.Field error={!!errors.password}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              value={data.password}
              placeholder="Make it secure"
              onChange={this.handleChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </Form.Field>
          <Button primary>Sign up</Button>
        </Form>
      </Container>
    );
  }
}

export default SignupForm;
