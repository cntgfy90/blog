import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);
      this.handleMenu = this.handleMenu.bind(this);
      this.handleClose = this.handleClose.bind(this);

      this.state = {
        auth: true,
        anchorEl: null
      }
    }

    handleChange(e, checked) {
      this.setState(() => ({
        auth: checked
      }));
    }

    handleMenu(e) {
      const target = e.currentTarget;
      this.setState(() => ({
        anchorEl: target
      }));
    }

    handleClose() {
      this.setState(() => ({
        anchorEl: null
      }));
    }

    render() {
      const { auth, anchorEl } = this.state;
      const { isAuthenticated, logout } = this.props;
      const open = Boolean(anchorEl);
      return (
        <div className="ui three item menu">
          {
            isAuthenticated ? <button className="ui primary button" onClick={() => logout()}>Log out</button> : <Link className="item" to="/login">Login</Link>
          }
        </div>
      );
    }
}


export default Header;
