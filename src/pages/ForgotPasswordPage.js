import React from 'react';
import { connect } from 'react-redux';
import { resetPasswordRequest } from '../actions/authActions';
import { Message } from 'semantic-ui-react';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';

class ForgotPasswordPage extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);

    this.state = {
      success: false
    };
  }

  submit(data) {
    return this.props.resetPasswordRequest(data).then((data) => {
      this.setState(() => ({ success: true }));
    });
  }

  render() {
    const { success } = this.state;
    return (
      <div>
        {
          success ? (
          <Message>Email has been sent.</Message>
        ) : (
          <ForgotPasswordForm submit={this.submit} />
        )
        }
      </div>
    );
  }
}

export default connect(null, { resetPasswordRequest })(ForgotPasswordPage);
