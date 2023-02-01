function simpleAnswer(head) {
  let p1 = head;
  let p2 = head;

  while (p2 != null && p2.next != null) {
    p1 = p1.next;
    p2 = p2.next.next;
  }
  return p1;
}

function myAnswer(head) {
  let count = 0;
  let total = 1;

  let cur = head;
  while (cur.next !== null) {
    cur = cur.next;
    total += 1;
  }

  const goal = total % 2 === 0 ? total / 2 : Math.floor(total / 2);

  cur = head;
  while (count !== goal) {
    cur = cur.next;
    count++;
  }
  return cur;
}
