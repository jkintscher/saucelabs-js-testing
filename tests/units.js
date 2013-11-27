module('Units - Dummy Tests', {
});

test("it compares strings with integers", function() {
  ok(1 == "1", "Passed!");
});

test("it breaks in IE<9", function() {
  if (window.attachEvent && !window.addEventListener) {
    ok(false, "This breaks in IE<9");
  } else {
    ok(true, "All other browsers work fine");
  }
});
