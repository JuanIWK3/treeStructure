const LEFT = 0;
const RIGHT = 1;

class TreeNode {
  constructor(value) {
    this.value = value;
    this.level = 0;
    this.descendents = [null, null];
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

const findNode = (node, value) => {
  if (!node) {
    return null;
  }

  if (node.value == value) {
    return node;
  }

  return findNode(node(left), value) || findNode(node(right), value);
};

const createNode = (event) => {
  event.preventDefault();
  const parent = event.target[0].value;
  const left = event.target[1].checked;
  const right = event.target[2].checked;
  const node = event.target[3].value;

  if (left) {
  }
};

const height = treeHeight(root);
for (let i = 0; i < height; i++) {
  const lvl = document.createElement("div");
  lvl.classList.add(`lvl${i}`);
  document.querySelector(".tree").appendChild(lvl);
}

createElement(root);
