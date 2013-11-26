test("hello test", function() {
  ok(1 == "1", "Passed!");
});

test("it breaks in IE<9", function() {
  if (window.attachEvent && !window.addEventListener) {
    ok(false, "IE<9 breaks.");
  } else {
    ok(true, "Everything else works fine");
  }
});
