function perc(mins) {
  const minsInSecs = mins * 60;
  const kick = Math.round(minsInSecs * 2);
  const hat = Math.round(minsInSecs * 4);
  const clap = Math.round(minsInSecs * 1);

  if (mins < 1) {
    return "invalid track time";
  } else if (mins > 100) {
    return "invalid track time";
  } else if (isNaN(mins)) {
    return "invalid track time";
  } else {
    return [`${kick} kicks`, `${hat} hihats`, `${clap} claps`];
  }
}

// TEST CASES

Test.assertSimilar(perc(3), ["360 kicks", "720 hihats", "180 claps"]);
Test.assertSimilar(perc(99.9999), [
  "12000 kicks",
  "24000 hihats",
  "6000 claps"
]);
Test.assertSimilar(perc(1), ["120 kicks", "240 hihats", "60 claps"]);
Test.assertSimilar(perc(100), ["12000 kicks", "24000 hihats", "6000 claps"]);
Test.assertSimilar(perc("a"), "invalid track time");
Test.assertSimilar(perc(113.567), "invalid track time");
Test.assertNotSimilar(perc(5), "invalid track time");
Test.assertNotSimilar(perc(0.1), ["4 kicks", "8 hihats", "2 claps"]);
var test = new Object();

test.a = function() {
  var valid = Math.round(Math.random() * 100 * 100) / 100;
  console.log(valid);
  Test.assertSimilar(perc(valid), percTest(valid));
};

var arr = [];
var i = 48;
while (i <= 126) {
  if ((i >= 48 && i <= 48) || (i >= 58 && i <= 126)) {
    arr.push(String.fromCharCode(i));
  }
  i++;
}

test.b = function() {
  var nanLength = Math.round(Math.random() * 10);
  var nanRandom = "";
  var i = 0;

  while (i <= nanLength) {
    nanRandom += arr[Math.floor(Math.random() * arr.length)];
    i++;
  }

  console.log(nanRandom);
  Test.assertSimilar(perc(nanRandom), percTest(nanRandom));
};

test.c = function() {
  var lessThanOne = Math.round(Math.random() * 100) / 100;
  console.log(lessThanOne);
  Test.assertSimilar(perc(lessThanOne), percTest(lessThanOne));
};

test.d = function() {
  var moreThanHundred = Math.round((Math.random() * 100 + 100.01) * 100) / 100;
  console.log(moreThanHundred);
  Test.assertSimilar(perc(moreThanHundred), percTest(moreThanHundred));
};

test.a();
test.a();
test.a();
test.a();
test.a();
test.a();
test.a();
test.a();
test.b();
test.b();
test.b();
test.b();
test.b();
test.b();
test.b();
test.b();
test.c();
test.c();
test.c();
test.c();
test.c();
test.c();
test.c();
test.c();
test.d();
test.d();
test.d();
test.d();
test.d();
test.d();
test.d();
test.d();

// BEST SOLUTION

function perc(mins) {
  if (typeof mins !== "number" || mins < 1 || mins > 100)
    return "invalid track time";
  var arr = [];
  arr.push(Math.round(mins * 120) + " kicks");
  arr.push(Math.round(mins * 240) + " hihats");
  arr.push(Math.round(mins * 60) + " claps");
  return arr;
}
