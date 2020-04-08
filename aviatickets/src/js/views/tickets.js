class TicketsUI {
  constructor() {
    this.container = document.querySelector('.tickets-section .row');
  }
  renderTickets(tickets) {
    this.clearContainer();
    if (!tickets.length) {
      this.showEmptyMessage();
      return;
    }
  }
  clearContainer() {
    this.container.innerHTML = '';
  }
  showEmptyMessage() {}
  static emptyMsgTeplate() {}
  static ticketTemplate(ticket) {}
}

const ticketsUI = new TicketsUI();
export default ticketsUI;
