import React from 'react';
import { connect } from 'react-redux';
import ConfirmEmailMessage from '../components/messages/ConfirmEmailMessage';

const DashboardPage = ({ isConfirmed }) => (
  <div>
    {isConfirmed && <ConfirmEmailMessage />}
  </div>
);

const mapStateToProps = (state ) => ({
  isConfirmed: !!state.user.confirmed
});

export default connect(mapStateToProps)(DashboardPage);
