export class LoginPage{

loginpage_username_textbox = '[name="username"]'
loginpage_password_textbox = '[name="password"]'
login_page_login_button = '.oxd-button'


enterUsername(username){
     cy.get(this.loginpage_username_textbox).type(username)
    }

enterPassword(password){
     cy.get(this.loginpage_password_textbox).type(password)
    }

clickLogin(){
     cy.get(this.login_page_login_button).click()
    }
}