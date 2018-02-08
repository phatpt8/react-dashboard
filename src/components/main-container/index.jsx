import React, { Component } from 'react';
import { Breadcrumb, Input } from 'react-bootstrap';
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

export default class MainContainer extends Component {

  render() {

    return (
      <div className="main _block">
        <div className="main _block-title">
          <span className="main _title">Manage Account</span>
          <div className="main _breadcrumb-wrapper">
            <Breadcrumb>
              <Breadcrumb.Item className="breadcrumb-item" href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumb-item" active>
                Manage Account
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="main _block-card">
            <div className="main _block-list-accounts">
              <span className="">List of Accounts</span>
              <div className="main _add-account">
                <a href="https://www.bovoss.com/accounts/create">
                  <div className="main _add-account-button">
                    <span>Thêm Tài khoản</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="main _block-search-accounts">
              <Input />
              <a className="main _refresh-account" href="https://www.bovoss.com/refresh-user">
                <span>Refresh All Accounts</span>
              </a>
            </div>
            <div className="main _table-wrapper"></div>
          </div>
      </div>
    )
  }
}