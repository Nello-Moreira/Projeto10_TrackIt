import routes from '../routes/routes';

function activeUser(user, history){
    if (!user.token) {
        history.push(routes.login);
        return null;
    };
}

export { activeUser };