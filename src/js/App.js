import LoginPage from './pages/login-form'

class App {
    constructor(id) {
        this.element = document.querySelector(`#${id}`)
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        const LoginPageComponent = new LoginPage(this.element, 'login-page')
    }
}

export default App
