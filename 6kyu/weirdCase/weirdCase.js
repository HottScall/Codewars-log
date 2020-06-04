// Current code - This is incomplete

function toWeirdCase(string) {
  var sentenceSplitted = string.split("");
  sentenceSplitted.forEach(function(item, index) {
    if (index % 2 == 0) {
      console.log(item.toUpperCase());
      return item.toUpperCase();
    } else {
      console.log(item);
      return item;
    }
  });
}

// Thought process
// split the string into an array
// loop through the array with forEach
// if the element of the array is empty then ignore it? Can you ignore it? Perhaps return true?
// else if the element of the array is even
// return capitalised even indexes
// otherwise return string as normal

// Tests

describe("toWeirdCase", function() {
  it("should return the correct value for a single word", function() {
    Test.assertEquals(toWeirdCase("This"), "ThIs");
    Test.assertEquals(toWeirdCase("is"), "Is");
  });
  it("should return the correct value for multiple words", function() {
    Test.assertEquals(toWeirdCase("This is a test"), "ThIs Is A TeSt");
  });
});
