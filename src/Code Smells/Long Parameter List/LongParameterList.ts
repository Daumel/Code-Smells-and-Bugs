export class LongParameterList {

    constructor() {
        this.checkAdvertisingConsent('name', 'surname', 'age', 'birthday', 'homeAddress', 'postAddress', 'gender', 'maritalStatus', true, undefined);
    }

    public checkAdvertisingConsent(name: string, surname: string, age: string, birthday: string, homeAddress: string, postAddress: string, gender: string, maritalStatus: string, advertisingConsent: boolean, mailService: any | undefined) {
        if (advertisingConsent) {
            mailService.sendAdvertising(name, surname, age, birthday, homeAddress, postAddress, gender, maritalStatus, advertisingConsent)
        } else {
            console.log('Advertising consent was not obtained from ' + name + ' ' + surname);
        }
    }
}
