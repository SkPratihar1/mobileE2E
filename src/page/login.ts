const { I } = inject();

export default {
    locator: {
        inputFiled:{
            email:"//*[@resource-id='email']",
            password:"//*[@resource-id='password']"
        },
        button:{
            loginButton:"//*[@resource-id='Login']"

        },
        contentText:{


        }

    },

    login(Email:string,Password:string){
        I.waitForVisible("Welcome Back!");
        I.click(this.locator.inputFiled.email);
        I.fillField(this.locator.inputFiled.email,Email);
        I.click(this.locator.inputFiled.password);
        I.fillField(this.locator.inputFiled.password,Password);
        I.click(this.locator.button.loginButton);
    }
}