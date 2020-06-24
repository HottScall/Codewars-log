// My Solution

function getAverage(marks) {
  //   //TODO : calculate the downwar rounded average of the marks array

  let total = marks.reduce((a, b) => (a += b));
  let average = total / marks.length;
  let down = Math.floor(average);

  return down;
}

// Best Soltion

function getAverage(marks) {
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}

// Test Cases

Test.describe("Test with pre-create arrays", function() {
  var so = function(marks) {
    var nbrMarks = marks.length;
    return parseInt(marks.reduce((val, next) => val + next) / nbrMarks);
  };

  var getRand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  var arraysTest = [
    [2, 2, 2, 2],
    [1, 5, 87, 45, 8, 8],
    [2, 5, 13, 20, 16, 16, 10],
    [1, 2, 15, 15, 17, 11, 12, 17, 17, 14, 13, 15, 6, 11, 8, 7]
  ];
  Test.it("should return the good average", function() {
    arraysTest.forEach(function(marks) {
      Test.assertEquals(
        getAverage(marks),
        so(marks),
        "The average of " + marks + " should return" + so(marks)
      );
    });
  });
  Test.it("Should work with randomly created arrays", function() {
    for (var i = 0; i < 10; i++) {
      var nbrElemes = getRand(20, 5);
      var testArr = [];
      for (var j = 0; j < nbrElemes; j++) {
        testArr.push(getRand(20, 1));
      }
      Test.assertEquals(
        getAverage(testArr),
        so(testArr),
        "The average of " + testArr + " should return" + so(testArr)
      );
    }
  });
});
