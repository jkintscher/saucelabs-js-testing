test("it knows math", function() {
  equal(1 + 1, 2);
});

test("it breaks in IE<9", function() {
  if (window.attachEvent && !window.addEventListener) {
    ok(false, "This breaks in IE<9");
  } else {
    ok(true, "All other browsers work fine");
  }
});
