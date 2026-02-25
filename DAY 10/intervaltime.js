let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Running every 2 seconds:", count);

  if (count === 5) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 2000);