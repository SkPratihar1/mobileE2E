
import Login from '../page/login'
import Access from '../page/locationAccess'
Feature("Car polling");
let email:string="kunal@itobuz.com";
let password:string="xswzaq123"
Scenario("Open page", ({ I }) => {
    I.wait(4)
    I.waitForVisible("Carpool with neighbours");
    I.click("Log in")
    console.log("test run 1")
})
Scenario("Login page", ({ I }) => {
    I.waitForVisible("Welcome Back!");
    Login.login(email,password)
    I.wait(3);
    console.log("test run 2")
});
Scenario("Location Access page ", ({ I }) => {
    Access.locationAccess()
    console.log("test run 3")
});