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
