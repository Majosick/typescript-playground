export class Employee {

    private _name: string

    constructor(_name: string, private _salary: number, public position: string) {
        this._name = _name
        this._salary = _salary
        this.position = position
    }

    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value
    }

    public get salary(): number {
        return this._salary
    }

    public set salary(value: number) {
        if (value < 0) throw new Error('Salary can\'t be negative')
        this._salary = value
    }

    increaseSalary(amount: number) {
        this._salary += amount
    }

}