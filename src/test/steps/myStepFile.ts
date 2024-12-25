import { Given, Then, When } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import myPage from "../../pages/myPageFile";
import registrationPage from "../../pages/registration";


let mypage: myPage;
let register: registrationPage;
//scenario 1
Given('Navigate to Website', async function () {
    mypage = new myPage(fixture.page);
    await mypage.navigateToMyPage();
});
When('click on button', async function () {
    mypage = new myPage(fixture.page);
    await mypage.clickButton();
});
Then('verify it', async function () {
    mypage = new myPage(fixture.page);
    await mypage.ValuateMyPage();
});


//scenario 2
Given('I am on the BookCart website', async function () {
    register = new registrationPage(fixture.page);
    await register.navigateToMyPage();
});
When('I enter {string},{string},{string},{string},{string} button and click on register', async function (firstName: string, lastName: string, username: string, password: string, confirmPassword: string) {
    register = new registrationPage(fixture.page);
    await register.eneterDetails(firstName, lastName, username, password, confirmPassword);
});
Then('I should see the message {string}', async function (message: string) {
    register = new registrationPage(fixture.page);
    await register.valuateMyPage(message);
});