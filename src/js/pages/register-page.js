import Input from "../components/input"

class RegisterPage {
    constructor(parent, id) {

        //Our form's wrapper
        this.parent = parent;
        this.id = id;

        //Our form
        this.element = document.createElement('form');
        this.element.id = this.id;

        // Declaring our form's input field, in our case : username & password
        this.firstname = new Input(this.element, 'firstname-input', 'Jean', 'Firstname');
        this.lastname = new Input(this.element, 'lastname-input', 'Paul', 'Lastname');
        this.username = new Input(this.element, 'username-input', 'JeanPaul', 'Username');
        this.password = new Input(this.element, 'password-input', '******', 'Password');

        // Declaring your submit button in order to trigger the handleSubmit event listener for your form
        this.submitElement = document.createElement('button');
        this.submitElement.id = this.id + '-button';
        this.submitElement.innerHTML = 'Register';

        //Biding `this` (RegisterPage class) to our this.handleSubmit method to access `this.username` for example
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
            password: this.password.value,
            lastname: this.lastname.value,
            firstname: this.firstname.value
        }

        fetch('http://localhost:3000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body) // body data type must match "Content-Type" header
        }).then(response => {
            response.json().then(data => {
                console.log(data);
                this.state.loading = false
                this.render();
            })
        })
    }

    render() {
        this.state.loading ? this.loaderElement.classList.remove('hide') : this.loaderElement.classList.add('hide');
    }
}

export default RegisterPage