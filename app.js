import { createServer } from "http";
import "./statut.js";
import "./api.js";
import { scrape } from "./index.js";

const requestListener = function (req, res) {

  res.end("Your IP Addresss is: " + req.socket.localAddress);
  console.log("Your IP Addresss is: " + req.socket.localAddress);
  console.log(scrape);

};

const server = createServer(requestListener);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});