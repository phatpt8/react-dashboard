import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleNavigationLeft } from 'actions/nav.reducer';
import './index.scss';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation _block">
        <div className="navigation _content">
          <div className="navigation _toggle-nav-left" onClick={this.props.toggleNavigationLeft}>
            <i className="mdi mdi-menu" />
          </div>
          <div className="navigation _logo">
            <a href="/index.html">
              <img
                className="navigation _logo-image"
                src="https://www.bovoss.com/backend/assets/images/skymining-pool.png"
                alt=""
              />
            </a>
          </div>
          <div className="navigation _user">
            <a href="#" className="navigation _profile">
              <img
                className="navigation _profile-image"
                src="https://www.bovoss.com/backend/assets/images/users/man-02.png"
                alt="user"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { toggleNavigationLeft })(Navigation);
