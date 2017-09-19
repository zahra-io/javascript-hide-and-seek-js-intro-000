function getFirstSelector(selector) {
  var firstSelector = document.querySelector(selector)
  return firstSelector;
};

function nestedTarget() {
  return document.querySelectorAll(".target #nested")
}