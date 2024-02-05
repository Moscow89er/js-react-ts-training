function BasicItem(_testProp) {
  this._parentProp = _testProp + 100;
}

BasicItem.prototype.getParentProp = function () {
  return this._parentProp;
}

function Item(_testProp) {
  BasicItem.call(this, _testProp);
  this._testProp = _testProp;
}

Item.prototype = Object.create(BasicItem.prototype);
Item.prototype.constructor = Item;

Item.data = 5;

Item.prototype.getProp = function () {
  return this._testProp + this.getParentProp() + Item.data;
}

console.log(new Item(1000).getProp());