import {getSkillById} from '../utils/api'

const SkillComponent = async (props) => {

    const { location, root } = props;

    const skillId = location.searchParams.get('id');

    //Creating our node element
    let skillEl = document.createElement('div');
    skillEl.id = skillId;
    skillEl.className = `skill`;

    let skill = await getSkillById(skillId);

    skillEl.innerHTML = (
        `
      <h1>${skill.name}</h1>
      <p>${skill.description}</p>
      `)

    return root.appendChild(skillEl);
}

export default SkillComponent