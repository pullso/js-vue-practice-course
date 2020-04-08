import '../css/style.css';
import './plugins';
import locations from './store/locations';
import formUI from './views/form';
import favorites from './store/favorite';
import ticketsUI from './views/tickets';
import currencyUI from './views/currency';
import favoriteDropDownUI from './views/favoriteDropDown';

document.addEventListener('DOMContentLoaded', (e) => {
  initApp();
  const form = formUI.form;
  //events
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    onFormSubmit();
  });
  //add favorite
  ticketsUI.container.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-favorite')) {
      let ticket = JSON.parse(e.target.dataset.currentTicket);
      favorites.addTicketToStore(ticket);
      favoriteDropDownUI.renderFavoriteTickets(favorites.store);
      e.target.innerText = 'Добавлен в избранное';
      e.target.classList.add('darken-4');
      M.toast({
        html: 'Билет был добавлен в избранное',
        classes: 'green lighten-1',
      });
    }
  });
  //delete favorite
  favoriteDropDownUI.container.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-favorite')) {
      let ticket = JSON.parse(e.target.dataset.currentTicket);
      favorites.removeTicketFromStore(ticket);
      favoriteDropDownUI.renderFavoriteTickets(favorites.store);
      ticketsUI.renderedItems.forEach((el) => {
        if (el.dataset.currentTicket === JSON.stringify(ticket)) {
          el.innerText = 'Добавить в избранное';
          el.classList.remove('darken-4');
        }
      });
      M.toast({
        html: 'Билет был удален из избранного',
        classes: 'green lighten-1',
      });
    }
  });

  //handlers
  async function initApp() {
    await locations.init();
    formUI.setAutocompleteData(locations.shortCitiesList);
  }

  async function onFormSubmit() {
    //сбор данных из инпутов

    const origin = locations.getCityCodeByKey(formUI.originValue);
    const destination = locations.getCityCodeByKey(formUI.destinationValue);
    const depart_date = formUI.departDateValue;
    const return_date = formUI.returnDateValue;
    const currency = currencyUI.currencyValue;

    //Code, Code, 2019-09, 2019-10
    await locations.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency,
    });
    ticketsUI.renderTickets(locations.latsSearch);
  }
});

// Show WEBPACK mode into console
if (process.env.NODE_ENV === 'production') {
  console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development mode');
}
