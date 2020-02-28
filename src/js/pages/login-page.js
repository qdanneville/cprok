import Input from "../components/input"

class LoginPage {
    constructor(parent, id, callback) {

        //Our form's wrapper
        this.parent = parent;
        this.id = id;
        this.callback = callback;

        //Our form
        this.element = document.createElement('form');
        this.element.id = this.id;

        // Declaring our form's input field, in our case : username & password
        this.username = new Input(this.element, 'username-input', 'Jean', 'Username');
        this.password = new Input(this.element, 'password-input', '******', 'Password');

        // Declaring your submit button in order to trigger the handleSubmit event listener for your form
        this.submitElement = document.createElement('button');
        this.submitElement.id = this.id + '-button';
        this.submitElement.innerHTML = 'Login';

        //Biding `this` (LoginPage class) to our this.handleSubmit method to access `this.username` for example
        this.handleSubmit = this.handleSubmit.bind(this);
        //Adding a submit event listener yo submit our data
        this.element.addEventListener('submit', this.handleSubmit);

        this.loaderElement = document.createElement("div");
        this.loaderElement.classList.add('loader');
        this.loaderElement.classList.add('hide');

        //Login Form State
        this.state = {
            message: '',
            loading: false
        }

        this.init();
    }

    init() {
        this.render();

        this.parent.append(this.element);

        //We're finally calling our submit button as the last child of our form
        this.element.append(this.submitElement);
        this.element.appendChild(this.loaderElement);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.state.loading = true;
        this.render();

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

                if (data.data) this.callback(data.data.user.firstname);

                this.state.loading = false
                this.render();
            })
        })
    }

    render() {
        this.state.loading ? this.loaderElement.classList.remove('hide') : this.loaderElement.classList.add('hide');
    }
}

export default LoginPage