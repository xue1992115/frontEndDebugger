// 异常断点，只要都选uncaught Exception,就会在抛出异常的地方断柱
// 网页调试中也有这个方法
function add(a , b) {
    // throw Error('add');
    return a + b;
}
console.log(add(1, 2));
// 网页调试中也有这个方法
// 条件断点, 鼠标右键添加条件断点，满足条件的就会断住，
function add2(a , b) {
    return a + b;
}
console.log(add2(1, 2));

//logPoint，当你觉得断住次数太多了，太麻烦，不想在断点处断住，但却想看下这时候的值，你是不是会选择加一个 console.log 呢？
// 绝大部分同学是这样的，但其实有更好的方式。添加一个 LogPoint：
// 网页调试中也有这个方法
function add3(a , b) {
    return a + b;
}
console.log(add3(1, 2));