const fs = require("fs");
fs.readFile("./test.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

// Exercise II

const txt = "Good morning!";

fs.writeFile("./hello.txt", txt, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(txt);
});


fs.appendFile("./hello.txt", "Goodnight", (err) => {
  console.log(err);
});

fs.unlink("./hello.txt", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File deleted successfully!");
});
