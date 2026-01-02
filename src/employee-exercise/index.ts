import { Employee } from "./employee";

const e1 = new Employee('Adam', 10000, 'boss')
const e2 = new Employee('John', 15000, 'cleaner')
const e3 = new Employee('Marian', 20000, 'manager')

e2.increaseSalary(2000)

const employees: Employee[] = [e1, e2, e3]

employees.forEach(emp => {
    if (emp.salary < 20000)
        console.log(`This mf ${emp.name} on position ${emp.position} earns less than 20000 so it\'s ${emp.salary}`);
})