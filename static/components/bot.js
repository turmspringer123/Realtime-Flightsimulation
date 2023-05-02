const { exec } = require('child_process');
const loop = () => exec('node csv.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
loop();
setInterval(loop, 10000);