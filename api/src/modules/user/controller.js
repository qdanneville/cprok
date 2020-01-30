const UserController = {
    authenticate: (req, res) => {
        console.log(req);
        res.send('User auth controller');
    }
}

console.log(UserController);

export default UserController