declare namespace CodeceptJS {
    interface I {
        wait(seconds: number): void;
        click(selector: string): void;
        waitForVisible(selector: string, timeout?: number): void;
        see(text: string, locator?: string): void;
        dontSee(text: string, locator?: string): void;
        fillField(field: string, value: string): void;
        // Add other missing methods here
    }
}