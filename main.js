function step1() {
    console.trace('step1');
    step2();
}

function step2() {
    console.trace('step2');
    step3();
}

function step3() {
    console.trace('step3');
}

step1();
