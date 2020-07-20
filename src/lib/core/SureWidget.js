export default class SureWidget {
  constructor(orgId, options = {
    openOnInit: true
  }) {
    const defaultOptions = {openOnInit: true};
    this.options = {...defaultOptions, ...options};
    this.origin = location.origin;
    this.widgetOrigin = 'https://sure.so';
    this.widgetQuery = `origin=${this.origin}&orgId=${orgId}`;
    this.widgetHomeUrl = `${this.widgetOrigin}/widget?${this.widgetQuery}`;
    this.elements = {};
    this.iframeOnLoad = null;

    if (this.options.openOnInit) {
      this.open();
    }

    window.addEventListener('message', (event) => {
      if (event.origin !== this.widgetOrigin) {
        return;
      }
      this.onIframeMessage(event);
    })
  }

  onIframeMessage(event) {
    switch (event.data) {
      case 'widget-checkout':
        this.elements.container.classList.add('f-interacted');
        break;
      case 'widget-close':
        this.elements.container.classList.remove('f-interacted');
        break;
    }
  }

  open() {
    if (!this.elements.container) {
      this.createWidget();
    }
    this.elements.container.classList.add('f-opened');
  }

  close(remove = false) {
    if (this.elements.container) {
      this.elements.container.classList.remove('f-opened');
      this.elements.container.classList.add('f-closed');
      if (remove) {
        document.body.removeChild(this.elements.container);
        this.elements.container = null;
      }
    }
  }

  createWidget() {
    this.createContainer(true).createIframe(this.widgetHomeUrl, true);
  }

  createIframe(src, append = true) {
    this.elements.iframe = document.createElement('iframe');
    this.elements.iframe.setAttribute('class', 'sure-widget__iframe');
    this.elements.iframe.setAttribute('allow', 'payment');
    // this.elements.iframe.style.display = 'none';
    this.elements.iframe.src = src;
    this.bindIframeEvents();
    if (append) {
      if (this.elements.container) {
        this.elements.container.innerHTML = '';
        this.elements.container.appendChild(this.elements.iframe);
      }
    }
    return this;
  }

  createContainer(append = true) {
    const container = document.createElement('div');
    container.setAttribute('class', 'sure-widget');
    container.setAttribute('id', 'sure-widget');
    if (append) {
      const exist = document.body.querySelector('#sure-widget');
      if (exist) {
        document.body.removeChild(exist);
      }
      document.body.appendChild(container);
    }
    this.elements.container = container;
    return this;
  }

  bindIframeEvents() {
    if (this.elements.iframe) {
      this.iframeOnLoad = () => {
        this.elements.iframe.removeEventListener('load', this.iframeOnLoad);
        this.elements.container.classList.add('f-loaded');
        this.elements.iframe.classList.add('f-loaded');
      };
      this.elements.iframe.addEventListener('load', this.iframeOnLoad);
    }
    return this;
  }
}
