// ----------------------------------------------------------------------
// -------------------------- UTILS -------------------------------------
// -------------------------GET DATA ------------------------------------
// ----------------------------------------------------------------------

export const getModules = async (props) => {

    let modules = await getData(`http://localhost:3000/api/modules/`);

    return modules.data
}

export const getSkills = async (props) => {

    let skills = await getData(`http://localhost:3000/api/skills/`);

    return skills.data
}

export const getSkillById = async (id) => {

    let skill = await getData(`http://localhost:3000/api/skills/${id}`);

    return skill.data
}

export const getSkillsByModuleId = async (moduleId) => {

    let skills = await getData(`http://localhost:3000/api/skills/?module=${moduleId}`);

    return skills.data
}

export const authenticate = async (user) => {
    let response = await postData(`http://localhost:3000/api/users/authenticate`, user);

    return response;
}

//A reusable fetching function
export const getData = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        header: {
            'Content-Type': 'Application/json'
        }
    });

    //We're now reading the response body with the method json()
    return await response.json();
}

export const postData = async (url, body) => {

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    //We're now reading the response body with the method json()
    return await response.json();
}
