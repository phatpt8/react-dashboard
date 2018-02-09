import React, { Component } from 'react';
import { Breadcrumb, FormGroup, FormControl, Col, Table, Form, ControlLabel, HelpBlock, Button, Modal } from 'react-bootstrap';
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
];
const tableHeaders = [
  'No.',
  'Username',
  'Tổng',
  "Package",
  "Avai",
  "Interest",
  "Income",
  "Wallet",
  "%",
  "Date",
  "Actions"
];

const TableRow = ({
  index,
  username,
  total,
  packages,
  avai,
  interest,
  income,
  wallet,
  percentage,
  date,
  toggleWithdrawModal,
  toggleTransferModal,
}) => (
  <tr>
    <td>{index}</td>
    <td>{username}</td>
    <td>{total}</td>
    <td>{packages}</td>
    <td>{avai}</td>
    <td>{interest}</td>
    <td>{income}</td>
    <td>{wallet}</td>
    <td>{percentage}</td>
    <td>{date}</td>
    <td>
      <Form action="https://www.bovoss.com/accounts/2">
        <a href={`https://www.bovoss.com/crawler/${index}`}>
          <i className="ti-reload" />
        </a>
        <a href={`https://www.bovoss.com/accounts/${index}/edit`}>
          <i className="ti-marker-alt" />
        </a>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          toggleWithdrawModal(true);
        }}>
          <i className="ti-wallet" />
          withdraw
        </a>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          toggleTransferModal(true);
        }}>
          <i className="ti-share" />
          transfer
        </a>
      </Form>
    </td>
  </tr>
);
const renderField = ({
  name,
  label,
  type = "text",
  error = null,
  disabled = false,
  labelSize = 4,
  value = "",
  onChange = () => null,
}) => (
  <FormGroup validationState={error ? 'error' : null} controlId={name}>
      <Col componentClass={ControlLabel} sm={12}>
        {label}
      </Col>
      <Col sm={12}>
        <FormControl
          name={name}
          type={type}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
        {error
          ? <HelpBlock>
              {error}
            </HelpBlock>
          : null}
      </Col>
    </FormGroup>
)
export default class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWithrawModal: false,
      showTransferModal: false,
      selectedRow: null,
    };
    this.renderWithdrawModal = this.renderWithdrawModal.bind(this);
    this.toggleWithdrawModal = this.toggleWithdrawModal.bind(this);
    this.toggleTransferModal = this.toggleTransferModal.bind(this);
  }

  toggleWithdrawModal(showWithrawModal, selectedRow = null) {
    console.log(showWithrawModal);
    this.setState({
      showWithrawModal,
      selectedRow
    })
  }

  toggleTransferModal(showTransferModal, selectedRow = null) {
    this.setState({
      showTransferModal,
      selectedRow
    })
  }

  renderWithdrawModal() {
    const { showWithrawModal, selectedRow } = this.state;
    const handleClose = () => {
      this.toggleWithdrawModal(false);
    }
    console.log('renderWithdrawModal', showWithrawModal);

    return (
      <Modal show={showWithrawModal} onHide={handleClose} bsSize="sm">
        <Modal.Header closeButton>
          <Modal.Title>Withdraw</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="main _withdraw-modal clearfix">
          <Form>
            {renderField({
              name: 'account',
              label: 'Account',
              disabled: true,
              value: 'wtf'
            })}
            {renderField({
              name: 'Amount',
              label: `Amount: (Avai: ${selectedRow ? selectedRow.avai : '0'})`,
            })}
            {renderField({
              name: 'password',
              label: 'Password 2',
              type: "password"
            })}
            <Col sm={12}>
              <Button bsStyle="link">Close</Button>
              <Button bsStyle="primary">Withdraw</Button>
            </Col>
          </Form>
          </div>
        </Modal.Body>
      </Modal>
    )
  }

  renderTransferModal() {
    const { showTransferModal, selectedRow } = this.state;
    const avai = 0;
    const handleClose = () => {
      this.toggleTransferModal(false);
    }

    return (
      <Modal show={showTransferModal}>
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {renderField({
              name: 'account',
              label: 'Account',
              disabled: true,
              value: 'wtf'
            })}
            {renderField({
              name: 'Amount',
              label: `Amount: (Avai: ${avai})`,
            })}
            {renderField({
              name: 'password',
              label: 'Password 2',
              type: "password"
            })}
            <Col sm={12}>

            </Col>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }

  render() {
    const { data = [{
      index: 1,
      username: "wolftungvn",
      total: 231,
      packages: "1,000",
      avai: 41.60,
      interest: 8.2,
      income: 100,
      wallet: 0,
      percentage: 7,
      date: "3h",
    }] } = this.props;

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
              <span className="main _list-accounts-title">List of Accounts</span>
              <div className="main _add-account">
                <a href="https://www.bovoss.com/accounts/create">
                  <div className="main _add-account-button">
                    <span>Thêm Tài khoản</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="main _block-search-accounts">
              <div className="main _search-input-wrapper">
                <Col sm={5}>
                  <FormControl type="text" placeholder="Search by keywords ..."/>
                </Col>
              </div>
              <a className="main _refresh-account" href="https://www.bovoss.com/refresh-user">
                <span>Refresh All Accounts</span>
              </a>
            </div>
            <div className="main _table-wrapper">
              <Table id="table-accounts" striped bordered responsive>
                <thead>
                  <tr>
                    {tableHeaders.map(header =>
                      <th key={header}>{header}</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {data.map((account) =>
                    <TableRow
                      key={account.index}
                      {...account}
                      toggleWithdrawModal={this.toggleWithdrawModal}
                      toggleTransferModal={this.toggleTransferModal}
                    />
                  )}
                </tbody>
              </Table>
            </div>
          </div>
          {this.renderWithdrawModal()}
          {this.renderTransferModal()}
      </div>
    )
  }
}