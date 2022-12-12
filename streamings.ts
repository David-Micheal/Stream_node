import fs from "fs";

const streaming = async () => {
  const readStream = fs.createReadStream("./NameFolder/name.txt", {
    highWaterMark: 100,
  });


  readStream.on("data", (buffer) => {
    console.log("Reading Data");
    console.log(buffer.toString());
  });
  readStream.on("end", () => {
    console.log("Read Successful!!!");
  });
};

streaming();
