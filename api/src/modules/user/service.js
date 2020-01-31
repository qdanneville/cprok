import userQuery from "./query"


// Notre service s'occupe de lancer la requête et de renvoyer la réponse de la base de données au controller
const UserService = {
    authenticate: (body, callback) => {

        userQuery.create(body, res => {
            console.log('services res', res);
            return callback({ success: true, message: res });
        },
        err => {

            console.log('err query', err);
                return callback({ success: false, message: 'Nope error' });
        })

    }
}

export default UserService;