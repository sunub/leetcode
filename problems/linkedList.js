function reverseLinkedList(head) {
  if (head == null || head.next == null) return head;
  var res = App(head.next);
  head.next.next = head;
  head.next = null;
  return res;
}
