const EventEmitter = require("events");

const readline = require("readline").createInterface({
  input: process.stdin, // show input on console
  output: process.stdout, // show output on console
});

readline.question(
  "Please give 2 values and give space in between: ",
  (name) => {
    let data = name.split(" "); // to make data array
    n1 = Number(data[0]);
    n2 = Number(data[1]);

    //logic, sum for n1 and n2 multpies <= 1000
    const loginfo = () => {
      let sum = 0;
      if (n1 <= 1000) {
        for (var i = n1; i <= 1000; i++) {
          if (i % n1 === 0) {
            sum += i;
          }
        }
      }

      let sum1 = 0;
      if (n2 <= 1000) {
        for (var j = n2; j <= 1000; j++) {
          if (j % n2 === 0) {
            sum1 += j;
          }
        }
      }
      // total multiple of both inputs
      let total = sum + sum1;
      console.log(`Multiples of ${n1} & ${n2} is ${total}`);
    };

    const event = new EventEmitter(); // event create

    //event call on emit
    event.on("MyEvent", () => {
      setTimeout(loginfo, 2000); //This function should log the sum after 2 seconds.
    });
    event.emit("MyEvent"); //listener
    readline.close();
  }
);
