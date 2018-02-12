import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';
import './index.scss';
import './normalize.min.css';
class Root extends Component {
  render() {
    const { children, notifications } = this.props;

    return (
      <div className="root _block">
        {children}
        <footer className="root _footer"> © 2018. All Rights Reserved. </footer>
        <Notifications notifications={notifications} />
      </div>
    );
  }
}

export default connect(state => ({ notifications: state.notifications }), null)(Root);
