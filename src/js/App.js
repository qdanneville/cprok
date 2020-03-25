import Header from './components/header'
import Home from './pages/home'
import Skill from './pages/skill'
import Login from './pages/login'

const App = async ({ root, component, location }) => {
  //Node - <div id="#app"></div>
  const appEl = root;

  //Declaring our Header component using our header function component
  const HeaderComponent = Header({ title: 'Arbre de compétence' });

  //We're calling our function component, so it can appear within the DOM
  appEl.innerHTML = HeaderComponent;

  console.log('app location :', location);

  //Our selfmade router
  switch (component) {
    case 'home':
      return await Home({ location: location, root })
    case 'skill':
      return await Skill({ location: location, root });
    case 'login':
      return await Login({ location: location, root });
    default:
      return await Home({ location: location, root })
  }
}


export default App;