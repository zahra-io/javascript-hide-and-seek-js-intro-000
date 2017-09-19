function getFirstSelector(selector) {
  var firstSelector = document.querySelector(selector)
  return firstSelector;
};

function nestedTarget() {
  return document.querySelector("#nested .target")
};


function deepestChild() {
  var node = document.getElementById('grand-node');
  var nextNode = node.children[0];
}
