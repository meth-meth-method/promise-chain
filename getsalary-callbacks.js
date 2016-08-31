function getSalary(callback) {
    setTimeout(() => {
        callback(33000);
    }, 1000);
}

function subtractTax(salary, callback) {
    setTimeout(() => {
        callback(salary * 0.75);
    }, 1000);
}

function subtractRent(salary, callback) {
    setTimeout(() => {
        callback(salary - 5000);
    }, 1000);
}

function getDisposableIncome(callback) {
    getSalary(salary_1 => {
        subtractTax(salary_1, salary_2 => {
            subtractRent(salary_2, salary_3 => {
                callback(salary_3);
            });
        });
    });
}

getDisposableIncome(disposable => {
    console.log(disposable);
});
