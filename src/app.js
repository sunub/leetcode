function App(list1, list2) { }
module.exports = App;
var list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
};
var list2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
};
console.log(App(list1, list2));
