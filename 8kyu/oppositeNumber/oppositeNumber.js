// My solution

function opposite(number) {
  var number2 = -number;
  return number2;
}

// Best solution

function opposite(number) {
  return -number;
}

// Test cases

Test.assertEquals(opposite(1), -1);
Test.assertEquals(opposite(0), 0);
Test.assertEquals(opposite(4.25), -4.25);
Test.assertEquals(opposite(3.3333333), -3.3333333);
Test.assertEquals(opposite(-12525220.3325), 12525220.3325);
Test.assertEquals(opposite(-5), 5);
