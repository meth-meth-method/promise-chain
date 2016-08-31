function getSalary() {
    return 33000;
}

function subtractTax(salary) {
    return salary * 0.75;
}

function subtractRent(salary) {
    return salary - 5000;
}

function getDisposableIncome() {
    let salary = getSalary();
    salary = subtractTax(salary);
    salary = subtractRent(salary);
    return salary;
}

console.log(getDisposableIncome());
