const a = 1;
let b = 2;
var c = 3;
function fun() {
    const a = 1;
    const b = 2;
    return function () {
        const c = 2;

        console.log(a, c);
        // debugger;
    };
}

const f = fun();
f();

function fun2() {
    const a = 1;
    const b = 2;
    return function () {
        const c = 2;
        const d = 4;

        return function () {
            const e = 5;
            debugger;
            console.log(a, c, e);
        };
    };
}

const f2 = fun2()();
f2();