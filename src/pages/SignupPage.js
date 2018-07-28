import React from 'react';
import { connect } from 'react-redux';
import SignupForm from '../components/forms/SignupForm';
import { signup } from '../actions/authActions';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(data) {
    this.props.signup(data).then(() => this.props.history('/dashboard'));
  }

  render() {
    return (
      <div>
        <SignupForm submit={this.submit} />
      </div>
    );
  }
}

export default connect(null, { signup })(SignupPage);