import React from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';
import { validateToken, resetPassword } from '../actions/authActions';
import ResetPasswordForm from '../components/forms/ResetPasswordForm';

class ResetPasswordPage extends React.Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);

    this.state = {
      loading: true,
      success: false
    };
  }

  componentDidMount() {
    this.props.validateToken(this.props.match.params.token)
      .then(() => this.setState(() => ({ loading: false, success: true })))
      .catch(() => this.setState(() => ({ loading: false, success: false })))
  }

  submit(data) {
    return this.props.resetPassword(data)
      .then(() => this.props.history.push('/login'))
  }

  render() {
    const { success, loading } = this.state;
    const token = this.props.match.params.token;
    return (
      <div>
        { loading && <Message>Loading...</Message> }
        { !loading && success && <ResetPasswordForm submit={this.submit} token={token} /> }
        { !loading && !success && <Message>Invalid token</Message> }
      </div>
    );
  }
}

export default connect(null, { validateToken, resetPassword })(ResetPasswordPage);
