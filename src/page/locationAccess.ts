const { I } = inject();

export default {
    locator: {
        button:{
            allowAccess:"//*[@resource-id='Allow Access']"

        },
        contentText:{


        }

    },

  locationAccess(){
    I.waitForVisible("Enable Location");
    I.click(this.locator.button.allowAccess);
    I.wait(3)

  }
}