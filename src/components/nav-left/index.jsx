import React, { Component } from 'react';
import './index.scss';

const headers = [
  {
    title: "Dashboard",
    href: "https://www.bovoss.com/dashboard"
  },
  {
    title: "Accounts",
    href: "#",
    children: [
      {
        title: "Manage",
        href: "https://www.bovoss.com/accounts"
      }
    ]
  }
]

export default class NavLeft extends Component {

  render() {

    return (
      <div className="navleft _block">
        <div className="navleft _nav-wrapper">
          <ul className="navleft _nav-list">
            {headers.map(header => 
              <li key={header.title}>

                <a className="navleft _nav-link" href={header.href}>
                  <span>{header.title}</span>
                </a>

                {!!header.children && header.children.length > 0 && 
                  <ul className="navleft _nav-list -child-list">
                    {header.children.map(child => 
                      <li className="navleft _nav-item" key={child.title}>
                        <a className="navleft _nav-link" href={child.href}>
                          <span>{child.title}</span>
                        </a>
                      </li>
                    )}
                  </ul>
                }
              </li>
            )}
          </ul>
        </div>
        
      </div>
    )
  }
}