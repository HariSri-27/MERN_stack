const timeoutId = setTimeout(() => {
  console.log("This will NOT run");
}, 5000);

clearTimeout(timeoutId);
console.log("Timeout cleared");