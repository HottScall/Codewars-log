// My Solution

const quarterOf = month => {
  if (month <= 3) {
    return 1;
  } else if (month > 3 && month <= 6) {
    return 2;
  } else if (month > 6 && month <= 9) {
    return 3;
  } else {
    return 4;
  }
};

// Best Solution

const quarterOf = m => Math.ceil(m / 3);

// Test Cases

Test.describe("Basic Tests", () => {
  Test.assertEquals(quarterOf(3), 1);
  Test.assertEquals(quarterOf(8), 3);
  Test.assertEquals(quarterOf(11), 4);
});
