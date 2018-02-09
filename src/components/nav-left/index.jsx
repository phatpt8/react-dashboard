import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './index.scss';

const headers = [
  {
    icon: <i className="mdi mdi-gauge" />,
    title: 'Dashboard',
    href: 'https://www.bovoss.com/dashboard',
  },
  {
    icon: <i className="mdi mdi-arrange-send-backward" />,
    title: 'Accounts',
    href: '#',
    children: [
      {
        title: 'Manage',
        href: 'https://www.bovoss.com/accounts',
      },
    ],
  },
];

class NavLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        className={classNames('navleft _block', {
          '-show': this.props.showNavLeft,
        })}
      >
        <div className="navleft _nav-wrapper">
          <ul className="navleft _nav-list">
            {headers.map(header => (
              <li key={header.title}>
                <a
                  className="navleft _nav-link"
                  href={header.href}
                  onClick={e => {
                    if (header.children) {
                      e.preventDefault();
                      const showHeader = this.state[header.title];
                      this.setState({
                        [header.title]: !showHeader,
                      });
                    }
                  }}
                >
                  {header.icon}
                  <span>{header.title}</span>
                </a>

                {!!header.children &&
                  header.children.length && (
                    <ul
                      className={classNames('navleft _nav-list -child-list', {
                        '-show': this.state[header.title],
                      })}
                    >
                      {header.children.map(child => (
                        <li className="navleft _nav-item" key={child.title}>
                          <a className="navleft _nav-link" href={child.href}>
                            <span>{child.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(state => state.navigation, null)(NavLeft);
