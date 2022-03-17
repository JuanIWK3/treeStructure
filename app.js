const LEFT = 0;
const RIGHT = 1;

class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendents = [];
  }

  get left() {
    return this.descendents[LEFT];
  }

  get right() {
    return this.descendents[RIGHT];
  }

  set left(value) {
    this.descendents[LEFT] = value;
  }

  set right(value) {
    this.descendents[RIGHT] = value;
  }
}

const root = new TreeNode("A");
const b = new TreeNode("B");
const c = new TreeNode("C");
const d = new TreeNode("D");
const e = new TreeNode("E");
const f = new TreeNode("F");

root.left = b;
root.right = c;
b.left = d;
b.right = e;
c.left = f;

console.log(root.value);

function createElement(value) {
  const nodeEl = document.createElement("div");
  nodeEl.innerHTML = value;
  document.body.appendChild(nodeEl);
}

const logDescendents = (node) => {
  const left = node.descendents[0];
  const right = node.descendents[1];

  if (left) {
    createElement(left.value);
  }
  if (right) {
    createElement(left.value);
  }

  if (left.descendents[0] && left.descendents[1]) {
    logDescendents(left);
  }

  if (right.descendents[0] && right.descendents[1]) {
    logDescendents(right);
  }
};

logDescendents(root);
