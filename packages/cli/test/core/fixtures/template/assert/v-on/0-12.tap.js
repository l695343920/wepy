function proxy () {
  var vm = this;
  var $wxEvent = arguments[arguments.length - 1];
  var _vm = this;
  return (function () {
    _vm.myclick(1, $wxEvent);
  })();
}
