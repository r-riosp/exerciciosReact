const Auth = ({ autenticado, userName }) => {
    if (autenticado == true) {
        return <h1>Boas vindas, {userName}!</h1>
    }
}
export default Auth;