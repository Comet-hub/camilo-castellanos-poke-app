import { CellsPageMixin as cellsPage } from '@cells/cells-page-mixin';
import { html, LitElement } from 'lit-element';
import { BbvaCoreIntlMixin as intl } from '@bbva-web-components/bbva-core-intl-mixin';
import '@cells-demo/demo-web-template/demo-web-template';
import '@pokedex/pokemon-list-ui/pokemon-list-ui.js';
import styles from './home-page.css';

class Home extends intl(cellsPage(LitElement)) {
  static get is() {
    return 'home-page';
  }

  constructor() {
    super();
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html`<demo-web-template page-title="Home">
      <div slot="app-main-content">
        <h1 class="main-title">${this.t('pokeApp')}</h1>
        <pokemon-list-ui
          @evolves=${this.handleEvolves}
          page="https://pokeapi.co/api/v2/pokemon?limit=50"
        >
          <span slot="list-title">${this.t('pokemonList')}</span>
          <p slot="load-button-text">${this.t('loadPokemons')}</p>
          <p slot="modal-text">${this.t('hasNoEvolution')}</p>
          <p slot="close-button-text">${this.t('close')}</p>
        </pokemon-list-ui>
      </div>
    </demo-web-template>`;
  }

  handleEvolves(e) {
    this.publish('pokemon-info', e.detail);
    this.navigate('evolution');
  }
}

window.customElements.define(Home.is, Home);
