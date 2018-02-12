import 'whatwg-fetch';

export const getAccounts = () => fetch('/accounts');
export const withdrawCash = (data) => fetch('/withdraw', { method: 'POST', body: data});
export const transferCash = (data) => fetch('/transfer-cash', { method: 'POST', body: data});
export const getAccountsEvent = (eventId) => fetch(`/events/${eventId}`);