const intervalId = setInterval(() => {
  console.log("Running every second");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped after 5 seconds");
}, 5000);