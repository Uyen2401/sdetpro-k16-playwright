export default abstract class LoginPage {
    public abstract inputUsername(username: string): void;
    public abstract inputPassword(password: string): void;
    public abstract clickLoginButton(): void;
}