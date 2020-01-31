// import userService from "./service"

// // Notre controller s'occupe de lancer le service et de renvoyer la réponse au client;
// const UserController = {
//     authenticate: (req, res) => {
//         userService
//             .authenticate(req.body, result => {
//                 result.success ? res.status(201).json(result) : res.status(401).json(result);
//             })
//     }
// }

// export default UserController

import ProjectServices from "./service"

const UserController = {
    allProjects : (req, res) => {
        ProjectServices.allProjects(req, result => {
            // console.log(result);
        })
    }
}

export default UserController