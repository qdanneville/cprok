import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { doLogin } from '../store/auth'

const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [errors, setErrors] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(null);
        dispatch(doLogin(username, password)).catch(err => setErrors(err));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" required placeholder="usermane" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" required placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button>Login</button>
            {errors && <span>{errors}</span>}
        </form>
    )
}

export default Login;

// 1 - On remplie le formulaire, on vérifie que toutes les données soit ok (bon type)
// 2 - On va lancer la procédure, fetch un utilisateur
// 3 - Renseigner l'utilisateur qu'un chargement se fait
// 4 - Lancer l'appel
// 5 - Stocker dans le store les différentes informations reçues
// 6 - Les infos useStore
// 7 - Un token
// 8 - Il faut rajouter le header authorization avec le bearer token
// 9 - Recharger le state avec ces nouvelles données
// 10 - Rediriger l'utilisateur
// 11 - Indiquez une réussite