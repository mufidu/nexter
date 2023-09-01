// This script deletes the temporary files created by the build process.

const fs = require("fs");

const comp = "./css/style.comp.css";
const post = "./css/style.post.css";
const prefix = "./css/style.prefix.css";
const sass = "./css/style.sass.css";

try {
    fs.unlinkSync(comp);
    fs.unlinkSync(post);
    fs.unlinkSync(prefix);
    fs.unlinkSync(sass);
} catch (err) {
    console.error(err);
}
