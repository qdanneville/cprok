class Input {
    constructor(parent, id, value, placeholder) {

        this.parent = parent;
        this.id = id;
        this.value = value;
        this.placeholder = placeholder;

        this.element = document.createElement('input');
        this.element.id = this.id;
        this.element.value = this.value;
        this.element.placeholder = this.placeholder;

        this.handleChange = this.handleChange.bind(this)
        this.element.addEventListener('change', this.handleChange);

        this.init();
    }
    init() {
        this.render();
        this.parent.appendChild(this.element);
    }
    handleChange(e) {
        e.preventDefault();
        this.value = e.target.value;
    }
    render() {
    }
}

export default Input