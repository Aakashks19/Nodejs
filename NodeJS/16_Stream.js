const fs = require("fs");

const readStream = fs.createReadStream("input.txt", "utf8");

const writeStream = fs.createWriteStream("output.txt");

readStream.on("data", (chunk) => {
    console.log("Reading Chunk:");
    console.log(chunk);
    writeStream.write(chunk.toUpperCase());
});

readStream.off("end", () => {
    console.log("Finished Reading File!");
});

readStream.on("error", (err) => console.log("Error:", err));
writeStream.on("error", (err) => console.log("Error:", err));