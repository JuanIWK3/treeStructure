const LEFT = 0;
const RIGHT = 1;

class TreeNode {
  constructor(value) {
    this.value = value;
    this.level = 0;
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
    this.descendents[LEFT].level = this.level + 1;
  }

  set right(value) {
    this.descendents[RIGHT] = value;
    this.descendents[RIGHT].level = this.level + 1;
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

function createElement(node) {
  const nodeEl = document.createElement("div");
  nodeEl.innerHTML = node.value;
  if (node.level === 0) {
    nodeEl.classList.add("root");
    nodeEl.classList.add("node");
    nodeEl.classList.add(node.level);
    document.querySelector(".lvl0").appendChild(nodeEl);
  } else if (node.level === 1) {
    nodeEl.classList.add("node");
    nodeEl.classList.add(node.level);
    document.querySelector(".lvl1").appendChild(nodeEl);
  } else if (node.level === 2) {
    nodeEl.classList.add("node");
    nodeEl.classList.add(node.level);
    document.querySelector(".lvl2").appendChild(nodeEl);
  } else if (node.level === 3) {
    nodeEl.classList.add("node");
    nodeEl.classList.add(node.level);
    document.querySelector(".lvl2").appendChild(nodeEl);
  }
  nodeEl.style.margin = `0 ${Math.pow(6, node.level)}px`;
}

createElement(root);

const logDescendents = (node) => {
  const left = node.descendents[0];
  const right = node.descendents[1];

  if (left) {
    createElement(left);
  }
  if (right) {
    createElement(right);
  }

  if (left.descendents[0] && left.descendents[1]) {
    logDescendents(left);
    console.log();
  }

  if (right.descendents[0] && right.descendents[1]) {
    logDescendents(right);
  }
};

logDescendents(root);
