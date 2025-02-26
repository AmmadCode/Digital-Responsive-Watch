const currentTime = () => {
  let curTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
  document.getElementById("clock").innerText = curTime;
};

currentTime();
setInterval(() => {
  currentTime();
}, 1000);