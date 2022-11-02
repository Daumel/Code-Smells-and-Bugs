export class MagicNumber {

    constructor() {
        console.log(this.calculateSalary(undefined));
    }

    public calculateSalary(employee: any | undefined) {
        // 8: DAILY_WORKING_HOURS
        const salary = 8 * employee.salaryPerHour;
        // 28800: 8 hours converted to seconds
        return salary / 28800;
    }
}
