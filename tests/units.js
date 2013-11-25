test("hello test", function() {
  ok(1 == "1", "Passed!");
});

test("it really fails", function() {
  ok(1 === "1", "Type-unsafe comparison works!");
});

test("it works", function() {
  equal("Foobar", "Foobar", "Strings are equal");
});
