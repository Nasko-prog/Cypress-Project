import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

it('pageobjectmodel' , function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()

//cy.get('[name="username"]').type('Admin')

//cy.get('[name="password"]').type('admin123')

//cy.get('.oxd-button').click()
})