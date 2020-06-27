// My Solution

function grow(x) {
  var result = x.reduce((a, b) => a * b);
  return result;
}

// Best solution

const grow = x => x.reduce((a, b) => a * b);

// Test cases

Test.describe("Basic tests", _ => {
  Test.assertEquals(grow([1, 2, 3]), 6);
  Test.assertEquals(grow([4, 1, 1, 1, 4]), 16);
  Test.assertEquals(grow([2, 2, 2, 2, 2, 2]), 64);
});

Test.describe("Random tests", _ => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a;
  function mygrow(x) {
    return x.reduce((a, b) => a * b);
  }
  var names = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (var i = 0; i < 100; i++) {
    var x = [],
      len = randint(2, 8);
    for (var k = 0; k < len; k++) x.push(names[randint(0, names.length - 1)]);
    var t = names[randint(1, names.length - 1)];

    Test.it(`Testing for ${x} and ${t}`, _ => {
      Test.assertEquals(
        grow(x.slice()),
        mygrow(x),
        "It should work for random inputs too"
      );
    });
  }
});
