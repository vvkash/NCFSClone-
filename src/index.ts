import express from "express"; 
import ffmpeg from "fluent-ffmpeg" 

/**
 * The above library needs too be installed, its CLI and its a tool so we can use it outside the command line.
 */


const app = express();

app.get ("/", (req, res) => {
    // Get path of the input video file from the request body
    const inputFilePath = req.body.inputFilePath;
    const outputFilePath = req.body.outputFilePath;

    if (!inputFilePath || !outputFilePath)  {
        res.status(400).send("Bad Request: Missing file path.");

    }

    ffmpeg(inputFilePath)
        .outputOptions('-vf', "scale=-1:360") //360p
        .on("end", () => {
             res.status(200).send("Video Processing has started!")

        })
        .on("error", (err) => {
           console.log(`error occured: ${err.message}`)
           res.status(500).send(`Internal Server Error: ${err.message}`)
        })
        .save(outputFilePath);
});

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(
        console.log(`Video processing service listening at http://localhost:${port}`));
});
