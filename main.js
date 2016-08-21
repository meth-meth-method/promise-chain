function step1() {
    console.trace('step1');
    step2();
}

function step2() {
    console.trace('step2');
    step3();
}

function step3() {
    setTimeout(step4, 0);

    for (let i = 1000000000; --i;);

    console.trace('step3');
}

function step4() {
    console.trace('step4');
}

step1();
