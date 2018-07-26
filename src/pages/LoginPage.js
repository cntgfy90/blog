import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import LoginForm from '../components/LoginForm';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(data) {
    this.props.login(data).then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

export default connect(null, { login })(LoginPage);
