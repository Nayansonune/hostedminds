var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const cors = require("cors");
app.use(
  cors({
    origin: ["http://192.168.29.83"],
    optionsSuccessStatus: 200,
  })
);

var data = 60;
function start() {
    const stop = setInterval(() => {
      console.log(data);
      io.emit("timer", data);
      data--;
      if (data==0) {
          //data=10;
        clearInterval(stop);
      }
    }, 1000);
  }


app.get("/", (req, res) => {
    console.log("triggered");
    start();
  });

io.on("connection", function (socket) {
  console.log("a user is connected");

  
      

  
  
 
});

//})

http.listen(6500, "192.168.29.137", () => {
  console.log("server is running at 6500");
});
