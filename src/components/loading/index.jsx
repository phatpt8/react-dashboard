import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './index.scss';

class Loading extends React.PureComponent {
  render() {
    if (!this.props.loading) {
      return null;
    }

    return (
      <div className="loading _block">
        <svg className="loading _circular" viewBox="25 25 50 50">
          <circle className="loading _path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
        </svg>
      </div>
    )
  }
}
export default connect(state => state.loading, null)(Loading);