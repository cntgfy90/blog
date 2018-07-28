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
    return this.props.signup(data).then((data) => {
      if (data.err) return Promise.reject(data.err);
      else this.props.history.push('/dashboard');
    });
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
