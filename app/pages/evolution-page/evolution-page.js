import { CellsPageMixin as cellsPage } from '@cells/cells-page-mixin';
import { html, LitElement } from 'lit-element';
import { BbvaCoreIntlMixin as intl } from '@bbva-web-components/bbva-core-intl-mixin';
import '@cells-demo/demo-web-template/demo-web-template';
import '@bbva-web-components/bbva-web-link/bbva-web-link';
import '@bbva-web-components/bbva-core-icon/bbva-core-icon.js';
import { bbvaBackmini } from '@bbva-web-components/bbva-foundations-icons';
import '@pokedex/pokemon-evolution-ui/pokemon-evolutions-ui.js';
import styles from './evolution-page.css';

const backMiniIcon = bbvaBackmini();

class Evolution extends intl(cellsPage(LitElement)) {
  static get is() {
    return 'evolution-page';
  }

  static get properties() {
    return {
      backIcon: {
        type: String,
        attribute: false,
      },
      pokemon: {
        type: Object,
      },
    };
  }

  constructor() {
    super();
    this.pokemon = {};
    this.backIcon = backMiniIcon;

    // this.handleChannels();
  }

  firstUpdated() {
    this.handleChannels();
  }

  static get styles() {
    return [ styles ];
  }

  render() {
    return html`<demo-web-template page-title="Evolution">
      <div slot="app-main-content">
        <bbva-web-link @click=${this.goToHome}>
          <bbva-core-icon icon="${this.backIcon}"></bbva-core-icon>
          ${this.t('back')}
        </bbva-web-link>
        <pokemon-evolutions-ui .pokemon=${this.pokemon}>
          <span slot="main-title">${this.t('evolutionTitle')}</span>
          <span slot="chain-title">${this.t('chainTitle')}</span>
        </pokemon-evolutions-ui>
      </div>
    </demo-web-template>`;
  }

  handleChannels() {
    this.subscribe('pokemon-info', (data) => {
      this.pokemon = data;
    });
  }

  goToHome() {
    this.navigate('home');
  }
}

window.customElements.define(Evolution.is, Evolution);
