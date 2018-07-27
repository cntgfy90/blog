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
    this.props.login(data)
      .then((data) => {
        !data.err && this.props.history.push('/');
      });

  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <LoginForm submit={this.submit} user={user.isAuthenticated === false && user} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, { login })(LoginPage);
