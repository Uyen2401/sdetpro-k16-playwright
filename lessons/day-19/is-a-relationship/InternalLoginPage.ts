import LoginPage from "./LoginPage";

export default class InternalLoginPage extends LoginPage {
    private usernameSel = "#username";
    private passwordSel = "#password";
    private loginBtnSel = "#loginBtn";


    public inputUsername(username: string): void {
        console.log(`Input username: ${username} for selector ${this.usernameSel}`);
    }
    public inputPassword(password: string): void {
        console.log(`Input username: ${password} for selector ${this.passwordSel}`);
    }
    public clickLoginButton(): void {
        console.log(`Click on Login button for selector ${this.loginBtnSel}`);
    }
}