import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Breadcrumb,
  FormGroup,
  FormControl,
  Col,
  Table,
  Form,
  ControlLabel,
  HelpBlock,
  Button,
  Modal,
  Row,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import './index.scss';

const headers = [
  {
    title: 'Dashboard',
    href: 'https://www.bovoss.com/dashboard',
  },
  {
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
const tableHeaders = [
  'No.',
  'Username',
  'Tổng',
  'Package',
  'Avai',
  'Interest',
  'Income',
  'Wallet',
  '%',
  'Date',
  'Actions',
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
    <td className="main -align-right">{total}</td>
    <td className="main -align-right">{packages}</td>
    <td className="main -align-right _avai">{avai}</td>
    <td className="main -align-right">{interest}</td>
    <td className="main -align-right">{income}</td>
    <td className="main -align-right _wallet">{wallet}</td>
    <td>{percentage}</td>
    <td>{date}</td>
    <td>
      <Form action={`https://www.bovoss.com/accounts/${index}`}>
        <OverlayTrigger placement="top" overlay={<Tooltip id="crawl">Crawl</Tooltip>}>
          <a href={`https://www.bovoss.com/crawler/${index}`}>
            <i className="ti-reload" /> crawl
          </a>
        </OverlayTrigger>

        <OverlayTrigger placement="top" overlay={<Tooltip id="edit">Edit</Tooltip>}>
          <a href={`https://www.bovoss.com/accounts/${index}/edit`}>
            <i className="ti-marker-alt" /> edit
          </a>
        </OverlayTrigger>

        <OverlayTrigger placement="top" overlay={<Tooltip id="withdraw">Withdraw</Tooltip>}>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              toggleWithdrawModal(true, { username, avai });
            }}
          >
            <i className="ti-wallet" /> withdraw
          </a>
        </OverlayTrigger>

        <OverlayTrigger placement="top" overlay={<Tooltip id="transfer">Transfer</Tooltip>}>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              toggleTransferModal(true, { username });
            }}
          >
            <i className="ti-share" /> transfer
          </a>
        </OverlayTrigger>

        <OverlayTrigger placement="top" overlay={<Tooltip id="delete">Delete</Tooltip>}>
          <button
            className="main _button-delete"
            type="submit"
            onClick={() => confirm('Are you sure')}
          >
            <i className="ti-trash" /> delete
          </button>
        </OverlayTrigger>
      </Form>
    </td>
  </tr>
);
const TableFooter = data => {
  const totalData = data.reduce(
    (acc, account) => {
      acc.total += account.total;
      acc.packages += account.packages;
      acc.avai += account.avai;
      acc.interest += account.interest;
      acc.income += account.income;
      acc.wallet += account.wallet;
      return acc;
    },
    { total: 0, packages: 0, avai: 0, interest: 0, income: 0, wallet: 0 }
  );

  return (
    <tr>
      <td />
      <td />
      <td className="main -align-right">{totalData.total}</td>
      <td className="main -align-right">{totalData.packages}</td>
      <td className="main _avai -align-right ">{totalData.avai}</td>
      <td className="main -align-right">{totalData.interest}</td>
      <td className="main -align-right">{totalData.income}</td>
      <td className="main _wallet -align-right">{totalData.wallet}</td>
      <td />
      <td />
      <td />
    </tr>
  );
};
const renderField = ({
  name,
  label,
  type = 'text',
  error = null,
  disabled = false,
  labelSize = 4,
  value = '',
  onChange = () => null,
}) => (
  <Row style={{ paddingBottom: '25px' }}>
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
        {error ? <HelpBlock>{error}</HelpBlock> : null}
      </Col>
    </FormGroup>
  </Row>
);
class MainContainer extends Component {
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
    this.setState({
      showWithrawModal,
      selectedRow,
    });
  }

  toggleTransferModal(showTransferModal, selectedRow = null) {
    this.setState({
      showTransferModal,
      selectedRow,
    });
  }

  renderWithdrawModal() {
    const { showWithrawModal, selectedRow } = this.state;
    const handleClose = () => {
      this.toggleWithdrawModal(false);
    };

    return (
      <Modal show={showWithrawModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Withdraw</Modal.Title>
        </Modal.Header>
        <Modal.Body className="clearfix">
          <Form>
            {renderField({
              name: 'account',
              label: 'Account',
              disabled: true,
              value: (selectedRow && selectedRow.username) || '',
            })}
            {renderField({
              name: 'Amount',
              label: `Amount: (Avai: ${selectedRow ? selectedRow.avai : '0'})`,
            })}
            {renderField({
              name: 'password',
              label: 'Password 2',
              type: 'password',
            })}
            <Col sm={5} smOffset={8}>
              <Button bsStyle="link" onClick={handleClose}>
                Close
              </Button>
              <Button bsStyle="primary" type="submit">
                Withdraw
              </Button>
            </Col>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  renderTransferModal() {
    const { showTransferModal, selectedRow } = this.state;
    const avai = 0;
    const handleClose = () => {
      this.toggleTransferModal(false);
    };

    return (
      <Modal show={showTransferModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body className="clearfix">
          <Form>
            {renderField({
              name: 'sender',
              label: 'Sender',
              disabled: true,
              value: (selectedRow && selectedRow.username) || '',
            })}
            {renderField({
              name: 'receiver',
              label: 'Receiver',
            })}
            {renderField({
              name: 'fullname',
              label: 'Full Name',
              disabled: true,
            })}
            {renderField({
              name: 'amount',
              label: 'Amount',
            })}
            {renderField({
              name: 'note',
              label: 'Note',
            })}
            {renderField({
              name: 'password',
              label: 'Password 2',
              type: 'password',
            })}
            <Col sm={5} smOffset={8}>
              <Button bsStyle="link" onClick={handleClose}>
                Close
              </Button>
              <Button bsStyle="primary" type="submit">
                Transfer
              </Button>
            </Col>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <div className="main _block">
        <div className="main _block-title">
          <span className="main _title">Manage Account</span>
          <div className="main _breadcrumb-wrapper">
            <Breadcrumb>
              <Breadcrumb.Item className="breadcrumb-item" href="#">
                Home
              </Breadcrumb.Item>
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
                  <i className="mdi mdi-plus-circle" />
                  <span>Thêm Tài khoản</span>
                </div>
              </a>
            </div>
          </div>
          <div className="main _block-search-accounts">
            <div className="main _search-input-wrapper">
              <Col sm={5}>
                <FormControl type="text" placeholder="Search by keywords ..." />
              </Col>
            </div>
            <a className="main _refresh-account" href="https://www.bovoss.com/refresh-user">
              <span>Refresh All Accounts</span>
            </a>
          </div>
          <div className="main _table-wrapper">
            <Table className="main _table-accounts" id="table-accounts" responsive>
              <thead>
                <tr>{tableHeaders.map(header => <th key={header}>{header}</th>)}</tr>
              </thead>
              <tbody>
                {data.map(account => (
                  <TableRow
                    key={account.index}
                    {...account}
                    toggleWithdrawModal={this.toggleWithdrawModal}
                    toggleTransferModal={this.toggleTransferModal}
                  />
                ))}
              </tbody>
              <tfoot>
                {TableFooter(data)}
                <tr>
                  <td colSpan="3" className="main _table-footer-summary">
                    {`Showing ${data.length} entries`}
                  </td>
                </tr>
              </tfoot>
            </Table>
          </div>
        </div>
        {this.renderWithdrawModal()}
        {this.renderTransferModal()}
      </div>
    );
  }
}

export default connect(state => state.accounts, null)(MainContainer);
