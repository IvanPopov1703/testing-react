/**
 * Сервис для аутентификации пользователя
 */
export default class AuthenticationService {

    static authUser(user) {
        const login = "lg";
        const password = "pass";
        return user.login === login && user.password === password;
    }
}
