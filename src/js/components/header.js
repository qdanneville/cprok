class Header {
    constructor(props) {
        this.props = props;
        this.element = document.createElement('header');
        this.element.id = this.props.id

        this.init();
    }

    init() {
        this.props.parent.appendChild(this.element);
        this.render();
    }

    render() {
        this.element.innerHTML = (
            `<h1>${this.props.name || 'Login'}</h1>`
        )
    }
}

export default Header