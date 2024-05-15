import express from "express"; 
import ffmpeg from "fluent-ffmpeg" 

/**
 * The above library needs too be installed, its CLI and its a tool so we can use it outside the command line.
 */


const app = express();
const port = 3000;

app.get ("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(
        console.log(`Video processing service listening at http://localhost:${port}`));
});
