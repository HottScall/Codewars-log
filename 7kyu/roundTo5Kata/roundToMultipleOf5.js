// My solution (as per process in README.md)

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}

//Sample Tests

[[0, 0], [1, 5], [3, 5], [5, 5], [7, 10], [39, 40]].forEach(([x, out]) =>
  Test.assertEquals(roundToNext5(x), out)
);

// Other possible solutions (Seen after completion of the KATA)

function roundToNext5(n) {
  while (n % 5 !== 0) n++;
  return n;
}
