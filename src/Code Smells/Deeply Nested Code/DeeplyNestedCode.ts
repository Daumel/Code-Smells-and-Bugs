export class DeeplyNestedCode {

    private readonly inputStatus: boolean;
    private readonly printerStatus: boolean;
    private readonly logContent: boolean;

    constructor(inputStatus: boolean, printerStatus: boolean, logContent: boolean) {
        this.inputStatus = inputStatus;
        this.printerStatus = printerStatus;
        this.logContent = logContent;
        this.printPage();
    }

    public printPage() {
        if (this.inputStatus) {
            console.log("Input status true");
            if (this.printerStatus) {
                console.log("Printer status true");
                if (DeeplyNestedCode.setupPage(5)) {
                    console.log("Setup page true")
                    const pageContent = "Content";
                    if (DeeplyNestedCode.printPage(pageContent)) {
                        console.log("Print page true");
                        if (this.logContent) {
                            console.log(pageContent);
                        }
                    } else {
                        console.log("Print page false");
                    }
                }
            } else {
                console.log("Printer status false");
            }
        } else {
            console.log("Input status false");
        }
    }

    private static setupPage(number: number) {
        console.log("Setup page");
        return number > 0;
    }

    private static printPage(str: string) {
        console.log(str);
        return true;
    }
}
