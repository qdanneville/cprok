import { getModules, getSkillsByModuleId } from '../utils/api'

//This is where we're going to get modules & skills and render them within the DOM
const TreeComponent = async (props) => {

    let treeEl = document.createElement('div');
    treeEl.className = `tree`

    //Getting all modules
    const modules = await getModules();
    //Then we're adding them to the DOM
    renderModules(modules, treeEl);

    //finally rendering the Tree within the dom
    return props.root.appendChild(treeEl);
}

const renderModules = async (modules, root) => {

    //We're creating our module template
    // <section>
    //   <h1>module name</h1>
    //   <ul>
    //     <li>module skill name</li>
    //     <li>module skill name</li>
    //     <li>module skill name</li>
    //     <li>...</li>
    //   </ul>
    // </section>

    const moduleTemplate = async (module) => {

        //First, get all skills by module
        let moduleSkills = await getSkillsByModuleId(module.id);

        //Then, we create our template once we have all module skills
        let moduleTemplate = document.createElement('section');

        moduleTemplate.innerHTML = (
            `
          <h1>${module.name}</h1>
          <ul>
            ${
            moduleSkills.map(skill => {
                return (`<li class="skill"><a href="/skills/?id=${skill.id}">${skill.name}</a></li>`)
            }).join('')
            }
          </ul>
        `
        )

        return moduleTemplate;
    }


    //We could use a loop function here, but we're only having 3 modules for our tree.
    //Otherwise we could have use an async mapping function --> https://codepen.io/Imundy/pen/xLBbog
    let module1template = await moduleTemplate(modules[0]);
    let module2template = await moduleTemplate(modules[1]);
    let module3template = await moduleTemplate(modules[2]);


    //Finally, we're displaying each module template within the root element which is TreeEl here, so it can appear within the DOM
    root.appendChild(module1template);
    root.appendChild(module2template);
    root.appendChild(module3template);
}

//This will be our Home component in App.js
export default TreeComponent