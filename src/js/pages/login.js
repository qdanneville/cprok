import { authenticate } from '../utils/api'

const Login = (props) => {

    const { location, root } = props;

    const handleChange = (event) => {
        // console.log(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!username.value && !password.value) {
            return errors.innerHTML = `Password & username can't be empty :)`
        }

        authenticate({ username: username.value, password: password.value }).then(data => {
            console.log(data)
        })
    }

    let loginEl = document.createElement('section');
    loginEl.className = 'login';

    let formEl = document.createElement('form');
    formEl.addEventListener('submit', handleSubmit);

    let username = document.createElement('input');
    username.type = 'text';
    username.placeholder = 'username';
    username.addEventListener('change', handleChange);

    let password = document.createElement('input');
    password.type = 'password';
    password.placeholder = 'password';
    password.addEventListener('change', handleChange);


    let button = document.createElement('button');
    button.innerText = 'Login';

    let errors = document.createElement('span');

    formEl.appendChild(username);
    formEl.appendChild(password);
    formEl.appendChild(button);
    formEl.appendChild(errors);


    loginEl.appendChild(formEl)

    return root.appendChild(loginEl);
}



export default Login