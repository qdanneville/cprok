class App {
    init() {
        this.render();
    }
    render() {
        let wrapper = document.getElementById('app');
        // wrapper.style.backgroundColor = 'red';
    }
}

class LoginForm {
    constructor(parent, id) {

        //Our form's wrapper
        this.parent = parent;
        this.id = id

        //Our form
        this.element = document.createElement('form');
        this.element.id = this.id;

        // Declaring our form's input field, in our case : username & password
        this.username = new Input(this.element.id, 'username-input', 'Jean', 'Username');
        this.password = new Input(this.element.id, 'password-input', '******', 'Password');

        // Declaring your submit button in order to trigger the handleSubmit event listener for your form
        this.submitElement = document.createElement('button');
        this.submitElement.id = this.id + '-button';
        this.submitElement.innerHTML = 'Login';

        //Biding `this` (LoginForm class) to our this.handleSubmit method to access `this.username` for example
        this.handleSubmit = this.handleSubmit.bind(this);
        //Adding a submit event listener yo submit our data
        this.element.addEventListener('submit', this.handleSubmit);
    }

    init() {
        this.render();
    }

    handleSubmit(e) {
        e.preventDefault();

        let body = {
            username: this.username.value,
            password: this.password.value
        }

        fetch('http://localhost:3000/api/users/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body) // body data type must match "Content-Type" header
        }).then(response => {
            response.json().then(data => {
                console.log(data);
            })
        })
    }

    render() {
        let wrapper = document.getElementById(this.parent);
        wrapper.append(this.element);

        //We're initiating our Input components
        this.username.init();
        this.password.init();

        //We're finally calling our submit button as the last child of our form
        this.element.append(this.submitElement);
    }
}

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
    }
    init() {
        this.render();
    }
    handleChange(e) {
        e.preventDefault();
        this.value = e.target.value;
    }
    render() {
        // Input's parent
        let wrapper = document.getElementById(this.parent)
        wrapper.appendChild(this.element);
    }
}

let AppComponent = new App()
let FormComponent = new LoginForm('app', 'form');

AppComponent.init();
FormComponent.init();

