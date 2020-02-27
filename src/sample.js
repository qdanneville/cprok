





class App {
    init() {
        console.log(this);
        this.render();
    }

    render() {
        let app = document.getElementById('app');
        app.style.backgroundColor = "red";
    }
}

const AppComponent = new App();
AppComponent.init();

class Input {
    constructor(parent, id, value, placeholder, type) {
        this.parent = document.getElementById(parent);
        this.id = id;
        this.value = value;
        this.placeholder = placeholder;
        this.type = type;

        this.element = document.createElement('input');

        this.handleChange = this.handleChange.bind(this);
        this.element.addEventListener('change', this.handleChange);
    }

    init() {
        this.render();
        console.log(this);
    }

    handleChange(e) {
        console.log(e);

        console.log(this);
    }

    render() {
        this.parent.appendChild(this.element);
    }
}

const UsernameInputComponent = new Input('app', 'username-input', 'Jean', 'Username', 'text');
UsernameInputComponent.init();