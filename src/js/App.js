import LoginPage from './pages/login-page'
import RegisterPage from './pages/register-page'
import Header from './components/header'

class App {
    constructor(id) {
        this.element = document.querySelector(`#${id}`)

        this.state = {
            name: null
        }

        this.setName = this.setName.bind(this);

        this.components = {
            header: new Header({ parent: this.element, id: 'header', name: this.state.name }),
            login: new LoginPage(this.element, 'login-page', this.setName),
            register: new RegisterPage(this.element, 'register-page')
        }

        this.init();
    }

    init() {
        this.render();
    }

    setName(name) {
        this.components.header.props.name = name;
        this.components.header.render();
    }

    render() {
        console.log('state :', this.state)
    }
}

export default App
