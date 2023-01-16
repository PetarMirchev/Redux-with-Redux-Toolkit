const express = require("express");
const app  = express();
const cors = require("cors");
const { json } = require("express");
const port = 8800;

app.use(cors());
app.use(express.json());

//fake call api to update user & return after 2 sec user back to front-end
app.post("/api/users/:id/update", (req, res) => {
    setTimeout( () => {
        res.send(req,body);
    },[2000]);
});

app.listen(port, () => {
    console.log(`Backend server is running on port:${port}!`);
});
//run api --->  node index.js