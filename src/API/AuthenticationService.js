/**
 * Сервис для аутентификации пользователя
 */
export default class AuthenticationService {

    static authUser(user) {
        const login = "1";
        const password = "1";
        return user.login === login && user.password === password;
    }
}
