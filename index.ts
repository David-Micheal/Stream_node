import fs from "fs";
import fspromises from "fs/promises";
import path from "path";

if (!fs.existsSync(path.join(__dirname, "NameFolder"))) {
  fspromises.mkdir(path.join(__dirname, "NameFolder"));
}

setInterval(() => {
  fspromises.appendFile(
    path.join(__dirname, "NameFolder", "name.txt"),
    "My name is David \t I am the best in class\t I love Node.Js\n"
  );
});
