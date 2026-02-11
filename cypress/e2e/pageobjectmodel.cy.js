import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

beforeEach(function(){
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

describe('Login Tests', function() {

it('Login Test with valid credentials' , function() {

   loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    cy.get('.oxd-userdropdown-name').click()


     })


it('Login Test with invalid username' , function() {

    loginPage.enterUsername('Admin123')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    cy.get('.oxd-userdropdown-name').click()

     })

    

it('Login Test with invalid password' , function() {

    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin1234')
    loginPage.clickLogin()
    cy.get('.oxd-userdropdown-name').click()

     })
})