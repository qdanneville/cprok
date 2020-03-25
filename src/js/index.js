import App from "./App"

// https://developer.mozilla.org/en-US/docs/Web/API/URL
const url = new URL(window.location.href)

document.addEventListener('DOMContentLoaded', () => {

    //appRoot is a node
    const appRoot = document.querySelector(`#app`)

    //Home page
    if (url.pathname === ('/')) return App({ root: appRoot, component: 'home', location: url });
    else if (url.pathname.includes('skills')) return App({ root: appRoot, component: 'skill', location: url });

});