import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Message, Icon, Button } from 'semantic-ui-react';
import { confirm } from '../actions/authActions';

class ConfirmationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      success: false
    }
  }

  componentDidMount() {
    this.props.confirm(this.props.match.params.token).then(() => {
      this.setState(() => ({
        loading: false,
        success: true
      }));
    }).catch((err) => {
      this.setState(() => ({
        loading: false,
        success: false
      }));
    });
  }

  render() {
    const { loading, success } = this.state;
    return (
      <div>
        {
          loading && (
            <Message icon>
              <Icon name="circle notched" loading />
              <Message.Content>
                <Message.Header>Validatin your email</Message.Header>
              </Message.Content>
            </Message>
          )
        }

        {
          (!loading && success) && (
            <Message success icon>
              <Icon name="checkmark" loading />
              <Message.Content>
              <Message.Header>Thank you! Your account has been verified.</Message.Header>
              <Link to="/dashboard">
                <Button primary>Go to dashboard</Button>
              </Link>
              </Message.Content>
            </Message>
          )
        }

        {
          (!loading && !success) && (
            <Message negative icon>
              <Icon name="warning sign" />
              <Message.Content>
                <Message.Header>Ooops. Invalid token it seems...</Message.Header>
              </Message.Content>
            </Message>
          )
        }
      </div>
    );
  }
}

export default connect(null, { confirm })(ConfirmationPage);
