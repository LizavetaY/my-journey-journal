import Component from '../component.js';

class HeaderMain extends Component {
    render() {
        const resource = this.request.resource;

        return new Promise(resolve => {
            resolve(`
                <h1>My journey journal</h1>
                <nav class="journalPages">
                    <a class="header__link ${!resource ? 'active' : ''}" href="/my-journey-journal/#/">Home</a>
                    <a class="header__link ${resource === 'trips' ? 'active' : ''}" href="/my-journey-journal/#/trips">Planned trips</a>
                    <a class="header__link ${resource === 'about' ? 'active' : ''}" href="/my-journey-journal/#/about">About</a>
                </nav>
                <div id="dataToday"></div>
            `);
        });
    }
}

export default HeaderMain;