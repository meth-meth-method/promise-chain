function getSalary() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(33000);
        }, 1000);
    });
}

function subtractTax(salary) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(salary * 0.75);
        }, 1000);
    });
}

function subtractRent(salary) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(salary - 5000);
        }, 1000);
    });
}

function getDisposableIncome(callback) {
    return getSalary().then(subtractTax).then(subtractRent);
}

getDisposableIncome().then(disposable => {
    console.log(disposable);
});