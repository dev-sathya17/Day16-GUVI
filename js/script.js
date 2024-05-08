setTimeout(() => {
  document.getElementById("root").textContent = "Countdown: " + 10;
  setTimeout(() => {
    document.getElementById("root").textContent = "Countdown: " + 9;
    setTimeout(() => {
      document.getElementById("root").textContent = "Countdown: " + 8;
      setTimeout(() => {
        document.getElementById("root").textContent = "Countdown: " + 7;
        setTimeout(() => {
          document.getElementById("root").textContent = "Countdown: " + 6;
          setTimeout(() => {
            document.getElementById("root").textContent = "Countdown: " + 5;
            setTimeout(() => {
              document.getElementById("root").textContent = "Countdown: " + 4;
              setTimeout(() => {
                document.getElementById("root").textContent = "Countdown: " + 3;
                setTimeout(() => {
                  document.getElementById("root").textContent =
                    "Countdown: " + 2;
                  setTimeout(() => {
                    document.getElementById("root").textContent =
                      "Countdown: " + 1;
                    setTimeout(() => {
                      document.getElementById("root").textContent =
                        "Happy Independence Day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
