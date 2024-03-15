import { log } from "console";





Feature("Car polling");

Scenario("open page", ({ I }) => {
    I.wait(4)
    I.waitForVisible("Carpool with neighbours");
    I.click("Log in")
    console.log("test run")
})
Scenario("login page", ({ I }) => {
    I.waitForVisible("Welcome Back!");
    I.click("//*[@resource-id='email']");
    I.fillField("//*[@resource-id='email']","kunal@itobuz.com");
    I.click("//*[@resource-id='password']");
    I.fillField("//*[@resource-id='password']","xswzaq123");
    I.click("//*[@resource-id='Login']");
    I.wait(10);
    console.log("test run 2")
});
Scenario("location Access page ", ({ I }) => {
     I.waitForVisible("Enable Location");
     I.click("//*[@resource-id='Allow Access']");
     I.wait(3)
    console.log("test run 3")
});