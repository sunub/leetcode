type ListNode = {
  val: number;
  next: ListNode | null;
};

function App(list1: ListNode, list2: ListNode) {}
module.exports = App;

const list1: ListNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
};

const list2: ListNode = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};
console.log(App(list1, list2));
