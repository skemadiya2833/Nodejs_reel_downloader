const express = require("express");
const bodyparser = require("body-parser");
const instagramGetUrl = require("instagram-url-direct")
const app = express();
app.use(express.static("reels"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.get("/", (req, res) => {
    res.sendFile(__dirname + "\\index.html");
  });

app.post("/", async (req, res) => {
    let url = req.body.posturl;
    
    let link = await instagramGetUrl(url);
    const variable = link.url_list[0];
    res.redirect(variable);
    
});

app.listen(3000, () => {
    console.log("App is listening on port 3000");
  });