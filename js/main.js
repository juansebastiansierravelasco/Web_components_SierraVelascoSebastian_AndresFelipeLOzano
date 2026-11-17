// R2 / Componente: Clase que extiende HTMLElement, nombre con guion y registrada con customElements.define
class EventCard extends HTMLElement {
    constructor() {
        super();
        // R2 / Se adjunta el Shadow DOM en modo open y se clona el template
        this.attachShadow({ mode: 'open' });
        const template = document.getElementById('event-card-template');
        const clonedContent = template.content.cloneNode(true);
        this.shadowRoot.appendChild(clonedContent);
    }

    // R3 / Atributos observados para detectar cambios
    static get observedAttributes() {
        return ['titulo', 'fecha', 'lugar'];
    }

    // R3 / Callback cuando los atributos cambian o se inicializan
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    // R3 / Método para inyectar los datos de los atributos en el template
    render() {
        const title = this.getAttribute('titulo') || '';
        const date = this.getAttribute('fecha') || '';
        const location = this.getAttribute('lugar') || '';

        const titleEl = this.shadowRoot.getElementById('event-title');
        const dateEl = this.shadowRoot.getElementById('event-date');
        const locationEl = this.shadowRoot.getElementById('event-location');

        if (titleEl) titleEl.textContent = title;
        if (dateEl) dateEl.textContent = date;
        if (locationEl) locationEl.textContent = location;
    }
}

// R2 / Registro del Custom Element
customElements.define('event-card', EventCard);