import { DiverseCodeSmells } from "./DiverseCodeSmells";

export class DiverseCodeSmells2 {
    // Code-Smells: unused import statement, unused parameter in a function, unused variable

    constructor() {
        this.cancelReservation(2145, undefined, undefined, 243);
        this.checkForCustomer(undefined, undefined);
    }

    public cancelReservation(customerId: number, reservationDate: Date | undefined, reservationService: any | undefined, reservationId: number) {
        if (reservationService.findReservation(customerId, reservationDate)) {
            reservationService.removeReservation(customerId, reservationDate);
            console.log('Reservation was cancelled');
        } else {
            console.log('Reservation does not exist');
        }
    }

    public checkForCustomer(customerData: any, customerService: any) {
        let id;
        if (customerService.findCustomer(customerData)) {
            return 'Customer exists';
        } else {
            customerService.addCustomer(customerData);
            return 'Customer added';
        }
    }
}
