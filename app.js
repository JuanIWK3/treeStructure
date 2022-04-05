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
const g = new TreeNode("G");
const h = new TreeNode("H");
const i = new TreeNode("I");
const j = new TreeNode("J");
const k = new TreeNode("K");
const l = new TreeNode("L");
const m = new TreeNode("M");
const n = new TreeNode("N");
const o = new TreeNode("O");

root.left = b;
root.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.left = h;
d.right = i;
e.left = j;
e.right = k;
f.left = l;
f.right = m;
g.left = n;
g.right = o;

console.log(root.value);

const treeHeight = (node) => {
  if (!node) {
    return 0;
  }

  return 1 + Math.max(treeHeight(node.left), treeHeight(node.right));
};

function createElement(node) {
  const margins = [];
  const height = treeHeight(root);
  for (let i = 1; i < height + 1; i++) {
    margins.push(i * 30);
  }
  margins.reverse();

  const nodeEl = document.createElement("div");
  nodeEl.innerHTML = node.value;

  if (node.level === 0) {
    nodeEl.classList.add("root");
    nodeEl.classList.add("node");
    nodeEl.classList.add(node.level);
    document.querySelector(".lvl0").appendChild(nodeEl);
    nodeEl.style.margin = `0 ${margins[0]}px`;
  } else {
    nodeEl.classList.add("node");
    nodeEl.classList.add(node.level);
    document.querySelector(`.lvl${node.level}`).appendChild(nodeEl);
    nodeEl.style.margin = `0 ${margins[node.level]}px`;
  }
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

console.log(treeHeight(root));

logDescendents(root);
